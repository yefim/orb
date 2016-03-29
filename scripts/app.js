let $body = $('body');
let $radial = $('.radial');
let x, y, radial;

$body.on('touchmove mousemove', (e) => {
  e.preventDefault();

  x = e.pageX || e.originalEvent.targetTouches[0].pageX;
  y = e.pageY || e.originalEvent.targetTouches[0].pageY;
});

$body.on('touchstart', (e) => {
  x = e.originalEvent.targetTouches[0].pageX;
  y = e.originalEvent.targetTouches[0].pageY;
});

var spotlight = function() {
  if (x && y) {
    radial = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255, 255, 255, .6) 30%, rgba(0, 0, 0, .6) 100%)';

    $radial.css({background: radial});
  }

  window.requestAnimationFrame(spotlight);
};

spotlight();
