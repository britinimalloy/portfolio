'use strict'

var projectView = {};

projectView.handleMainNav = function () {
  $('#main').show();
  $('#list-stuff').hide();
  $('#about').hide();
  $('#projects').hide();
  $('.main-nav').on('click', '.tab', function () {
    $('.tab-content').hide();
    // from starter code lab 4:
    // $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.handleHamburgerBehavior = function () {
  $('#hamburger-icon').on('click', function () {
    $('ul.nav').children().show();
    $('#hamburger-icon').hide();
  })
};

// hide everything but main (and footer section) on page load
projectView.pageInit = function () {
  // $('.tab-content').hide();
  $('#main').show();
  $('#list-stuff').hide();
  $('#about').hide();
  $('#projects').hide();
};

$(document).ready(function () {
  // projectView.pageInit();
  projectView.handleMainNav();
  projectView.handleHamburgerBehavior();
})
