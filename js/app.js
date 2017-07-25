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

var projects = [];

Projects.all = [];

Projects.prototype.toHtml = function () {
  var hTemplateInfo = $('#projectsHandlebarTemplate').html();

  var compiledProject = Handlebars.compile(hTemplateInfo);

  return compiledProject(this);
}

projectData.forEach(function(projectDataObj) {
  projects.push(new Projects(projectDataObj));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
