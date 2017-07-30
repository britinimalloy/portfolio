'use strict'

var projectView = {};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function () {
    // from starter code lab 5:
    // if ($(this) === $('#main')) {
    //   $('#list-stuff').hide();
    //   $('#about').hide();
    //   $('#projects').hide();
    // } else if ($(this) === $('#about')) {
    //   $('#main').hide();
    //   $('#list-stuff').hide();
    //   $('#projects').hide();
    // } else {
    //   $('#main').hide();
    //   $('#about').hide();
    //   $('#list-stuff').hide();
    // }
    // $('.tab-content').hide();
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
