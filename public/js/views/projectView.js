'use strict'

var projectView = {};

projectView.handleMainNav = function () {
  // click on the nav links to hide all sections, then show only the selected one
  // The following content is help from Aeone:
  $('.nav-tabs').on('click', function(){
    $('.tab-content').hide();
    var selected = $(this).attr('id');
    console.log(selected);

    if (selected === 'nav-about') {
      $('#about').show();
    } else if (selected === 'nav-projects') {
      $('#projects').show();
    } else {
      $('#main').show();
    }
  });
  $('#main-nav .nav-tabs:first').click();
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
})
