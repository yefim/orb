const MIN_RADIUS = 30;

let $body = $('body');
let $radial = $('.radial');
let radius = MIN_RADIUS;
let x, y, radial;

$body.on('touchmove mousemove', (e) => {
  x = e.pageX || e.originalEvent.targetTouches[0].pageX;
  y = e.pageY || e.originalEvent.targetTouches[0].pageY;
});

$body.on('touchstart', (e) => {
  x = e.originalEvent.targetTouches[0].pageX;
  y = e.originalEvent.targetTouches[0].pageY;
});

var spotlight = function() {
  if (x && y) {
    radial = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255, 255, 255, .6) ' + radius + '%, rgba(0, 0, 0, .6) 100%)';

    $radial.css({background: radial});
  }

  window.requestAnimationFrame(spotlight);
};

spotlight();
