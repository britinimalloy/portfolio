'use strict';

var projects = [];

// ===========================
// ========CONSTRUCTOR========
// ===========================
function Projects (projectDataObj) {
  this.name = projectDataObj.name;
  this.img = projectDataObj.img;
  this.description = projectDataObj.description;
}

Projects.prototype.toHtml = function() {
  var projectTemplateString = $('#projectsHandlebarTemplate').html();
  var compiledProject = Handlebars.compile(projectTemplateString);
  return compiledProject(projectTemplateString);
}

projectData.forEach(function(projectObject) {
  projects.push(new Projects(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

// function addNewElementForCloning () {
//   var newListElement = $('.LItemplateUL').clone();
//   newListElement.text('here is another li, this is silly');
//   console.log(newListElement);
//   $('ul').append(newListElement);
// }
// addNewElementForCloning();

// on-click event handler for clicking the hamburger menu icon
