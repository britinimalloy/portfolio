'use strict'

var projectView = {};

projectView.handleMainNav = function () {
  // The following content is help from Aeone:
  // =================click on nav-item hides other content
  $('.nav-tabs').on('click', function(event){
    // ===============event.preventDefault();
    // ===============to prevent from taking the browser to a new URL
    event.preventDefault();
    $('.tab-content').hide();
  // =================reveals only nav-item clicked
    var selected = $(this).attr('id');
    console.log(selected);
    // ===============dynamically build selector with correct ID based on data
    if (selected === '#nav-about') {
      $('#about').show();
    } else if (selected === '#nav-projects') {
      $('#projects').show();
    } else {
      $('#main').show();
    }
    // ================$('section[id="' + selected + '"]').show();
  });
  $('#main-nav .nav-tabs:first').click();
};

// $('.main-nav').on('click', '.tab', function () {
//   from starter code lab 5:
//   if ($(this) === $('#main')) {
//     $('#list-stuff').hide();
//     $('#about').hide();
//     $('#projects').hide();
//   } else if ($(this) === $('#about')) {
//     $('#main').hide();
//     $('#list-stuff').hide();
//     $('#projects').hide();
//   } else {
//     $('#main').hide();
//     $('#about').hide();
//     $('#list-stuff').hide();
//   }
//   $('.tab-content').hide();
//   from starter code lab 4:
//   $('#' + $(this).data('content')).fadeIn();
// });
// $('.main-nav .tab:first').click();

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
