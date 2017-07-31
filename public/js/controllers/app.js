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

Projects.fetchAll = function() {
  if (localStorage.projectData) {
    Projects.loadAll(JSON.parse(localStorage.projectData))
  } else {
    $.getJSON('data/projectArticles.json')
    .then(function(projectData) {
      Projects.loadAll(projectData);
      localStorage.projectData = JSON.stringify(projectData);
    }, function(err) {
      console.error(err);
    });
  }
}

function addNewElementForCloning () {
  var newListElement = $('.LItemplateUL').clone();
  newListElement.text('here is another li, this is silly');
  $('ul.nonsense').append(newListElement);
}
addNewElementForCloning();
