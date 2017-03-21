require('main.less');

const $radial = document.querySelector('.radial');

let x;
let y;

const addEventListener = (element, eventNames, listener) => {
  const events = eventNames.split(' ');

  for (let i = 0; i < events.length; i++) {
    element.addEventListener(events[i], listener, false);
  }
};

addEventListener(document, 'touchmove mousemove', (e) => {
  x = e.clientX;
  y = e.clientY;
});

/*
$body.on('touchstart', (e) => {
  x = e.originalEvent.targetTouches[0].pageX;
  y = e.originalEvent.targetTouches[0].pageY;
});
*/

const spotlight = () => {
  if (x && y) {
    const radial = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, .6) 30%, rgba(0, 0, 0, .6) 100%)`;

    $radial.style.background = radial;
  }

  window.requestAnimationFrame(spotlight);
};

spotlight();
