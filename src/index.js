import './styles.css';

let x;
let y;

const addEventListener = (element, eventNames, listener) => {
  const events = eventNames.split(' ');

  for (let i = 0; i < events.length; i++) {
    element.addEventListener(events[i], listener, false);
  }
};

const getTouch = (e) => {
  return e.targetTouches && e.targetTouches[0] || {};
};

addEventListener(document, 'touchmove mousemove', (e) => {
  e.preventDefault();

  const touch = getTouch(e);

  x = e.clientX || touch.clientX;
  y = e.clientY || touch.clientY;
});

addEventListener(document, 'touchstart', (e) => {
  const touch = getTouch(e);
  x = touch.clientX;
  y = touch.clientY;
});

const spotlight = () => {
  if (x && y) {
    const radial = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, .6) 30%, rgba(0, 0, 0, .6) 100%)`;

    document.body.style.background = radial;
  }

  window.requestAnimationFrame(spotlight);
};

spotlight();
