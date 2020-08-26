$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
      $('.bag').addClass('hide');
      $('#header').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
      $('.bag').removeClass('hide');
      $('#header').removeClass('active');
    }
  });
});


$(function () {
  $('.dropmenu-title').click(function () {
    var $answer = $(this).find('.dropmenu-list');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('×');
    }
  });
});
