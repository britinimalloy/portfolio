'use strict'

var projectView = {};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function () {
    $('.tab-content').hide();
    // from starter code lab 4:
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.handleHamburgerBehavior = function () {
  $('#hamburger-icon').on('click', function () {
    $('ul.nav').children().show();
    $('#hamburger-icon').hide();
  })
};

$(document).ready(function () {
  projectView.handleMainNav();
  projectView.handleHamburgerBehavior();
  projectView.pageInit();
})
