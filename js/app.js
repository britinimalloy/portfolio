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

projectData.forEach(function(projectDataObj) {
  projects.push(new Projects(projectDataObj));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
