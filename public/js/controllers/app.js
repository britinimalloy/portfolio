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


// Projects.prototype.toHtml = function () {
//   var $template = $('#projects').clone();
//
//   $template.find('header > h1').text(this.name);
//   $template.find('div > img').text(this.img);
//   $template.find('section').text(this.description);
//   return $template;
// }

// Projects.prototype.toHtml = function() {
//   var projectTemplateString = $('#projectsHandlebarTemplate').html();
//   console.log(projectTemplateString);
//   var compiledProject = Handlebars.compile(projectTemplateString);
//   console.log(compiledProject);
//   return compiledProject(projectTemplateString);
// }

Projects.prototype.toHtml = function() {
  var projectTemplateString = Handlebars.compile($('#projectsHandlebarTemplate').text());
  // console.log(projectTemplateString);
  // var compiledProject = Handlebars.compile(projectTemplateString);
  // console.log(compiledProject);
  return projectTemplateString(this);
}

projectData.forEach(function(projectDataObj) {
  projects.push(new Projects(projectDataObj));
  console.log(projects);
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});

function addNewElementForCloning () {
  var newListElement = $('.LItemplateUL').clone();
  newListElement.text('here is another li, this is silly');
  $('ul').append(newListElement);
}
addNewElementForCloning();
