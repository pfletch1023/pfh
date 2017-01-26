$(document).ready(function() {

  function randomBetween(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  // Make draggable
  $('span').addClass('draggable').draggable();

  // Reset
  $('#reset').click(function() {
    $('.draggable').animate({ top: '0', left: '0' }, 150);
  });

  // Random
  $('#random').click(function() {
    $.each( $('.draggable'), function( key, val ) {
      yUnit = $(window).height() / 3;
      y = randomBetween(yUnit * -1, yUnit);
      xUnit = $(window).width() / 3;
      x = randomBetween(xUnit * -1, xUnit);
      $(val).stop().animate({ top: y + 'px', left: x + 'px' }, 250);
    });
  })


});
