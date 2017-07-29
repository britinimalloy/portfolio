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

// hide everything but main (and footer section) on page load
// projectView.pageInit = function () {
//   $('.tab-content').hide();
//   $('#main').show();
//   $('#list-stuff').hide();
//   $('#about').hide();
//   $('#projects').hide();
// };

// from starter code lab 4
projectView.handlePageBehavior = function() {
  $('#main-links').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};


$(document).ready(function () {
  projectView.handleMainNav();
  projectView.handleHamburgerBehavior();
  projectView.pageInit();
})
