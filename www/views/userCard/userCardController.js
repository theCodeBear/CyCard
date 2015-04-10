angular.module('cycard')

.controller('userCardCtrl', ['$scope', function($scope) {

  $scope.editSave = 'Edit';
  $scope.notEditing = true;
  $scope.side1 = true;

  $scope.cardMode = function(text) {
    if (text === 'Edit') {
      $scope.editSave = 'Save';
      $('#editSaveCard').addClass('button-positive');
      $('#editSaveCard').removeClass('button-energized')
      $('#editSaveCard').css('color', 'white');
      $scope.notEditing = false;
    } else {
      $scope.editSave = 'Edit';
      $('#editSaveCard').addClass('button-energized');
      $('#editSaveCard').removeClass('button-positive');
      $('#editSaveCard').css('color', 'black');
      $scope.notEditing = true;
    }
  };

  $scope.flipCard = function() {

  };

  $scope.user = {
    name: 'Todd Kronenberg',
    job: 'Freelance Web Developer',
    location: 'Bay Area, CA',
    email: 'toddkronenberg@gmail.com',
    links: {
      website: 'https://toddkronenberg.com',
      blog: 'https://www.medium.com/@TK_CodeBear',
      github: 'https://github.com/theCodeBear'
    },
    skills: ['Node.js', 'Hapi.js', 'Angular', 'jQuery']
  };

}]);