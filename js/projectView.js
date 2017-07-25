'use strict'

var projectView = {};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function () {
    $('.tab-content').hide();
  })
};

projectView.handleHamburgerBehavior = function () {
  $('#hamburger-icon').on('click', function () {
    $('ul.nav').children().show();
    $('#hamburger-icon').hide();
  })
}

$(document).ready(function () {
  projectView.handleMainNav();
  projectView.handleHamburgerBehavior();
})
