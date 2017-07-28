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


Projects.prototype.toHtml = function () {
  var $template = $('#projects').clone();

  $template.find('header > h1').text(this.name);
  $template.find('div > img').text(this.img);
  $template.find('section').text(this.description);
  return $template;
}

projectData.forEach(function(projectDataObj) {
  projects.push(new Projects(projectDataObj));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
