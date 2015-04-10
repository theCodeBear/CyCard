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

  // $scope.inputFocus = false;
  // $scope.screenTouch = function() {
  //   if (!$scope.notEditing) {
  //     console.log($(this).prev().prop('tagName'));
  //     console.log('active: ', $(document.activeElement)[0].firstchild);
  //     // if ($(document.activeElement).)
  //   }
  // };

  $scope.color = '#000000';
  $('#colorCardLabel').css('background-color', $scope.color);
  $scope.cardColor = '#DDDDAA';
  // $('#backgroundColoCardLabel').css('background-color', $scope.cardColor);
  $('#userCard').css('background-color', $scope.cardColor);

  $scope.changeBackgroundColor = function(color) {
    $('#userCard').css('background-color', color);
  };

  $scope.changeLabelColor = function(color) {
    $(document.activeElement).css('color', color);
    $('#colorCardLabel').css('background-color', color);
  };
  // $('#colorCard').css('background-color', $scope.color);

}]);