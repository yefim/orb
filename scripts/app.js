require('styles');

let x;
let y;

const addEventListener = (element, eventNames, listener) => {
  const events = eventNames.split(' ');

  for (let i = 0; i < events.length; i++) {
    element.addEventListener(events[i], listener, false);
  }
};

addEventListener(document, 'touchmove mousemove', (e) => {
  e.preventDefault();

  x = e.clientX || e.targetTouches[0].clientX;
  y = e.clientY || e.targetTouches[0].clientY;
});

addEventListener(document, 'touchstart', (e) => {
  x = e.targetTouches[0].clientX;
  y = e.targetTouches[0].clientY;
});

const spotlight = () => {
  if (x && y) {
    const radial = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, .6) 30%, rgba(0, 0, 0, .6) 100%)`;

    document.body.style.background = radial;
  }

  window.requestAnimationFrame(spotlight);
};

spotlight();
