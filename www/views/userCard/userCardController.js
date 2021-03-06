angular.module('cycard')

.controller('userCardCtrl', ['$scope', '$state', '$rootScope', 'Users', 'Cards', function($scope, $state, $rootScope, Users, Cards) {

  Users.status($state.current.name);

  $scope.editSave = 'Edit';
  $scope.notEditing = true;
  $scope.side1 = true;
  Cards.get($rootScope.userId).then(function(data) {
    $scope.user = data;
    console.log('user', $scope.user);
  });


  $scope.cardMode = function(text) {
    // user wants to edit card
    if (text === 'Edit') {
      $scope.editSave = 'Save';
      $('#editSaveCard').addClass('button-positive');
      $('#editSaveCard').removeClass('button-energized')
      $('#editSaveCard').css('color', 'white');
      $('#editSaveCard').addClass('fa fa-floppy-o');
      $('#editSaveCard').removeClass('icon ion-edit');
      $scope.notEditing = false;
    } else {  // user saves card

      // Cards.save();
      $scope.editSave = 'Edit';
      $('#editSaveCard').addClass('button-energized');
      $('#editSaveCard').removeClass('button-positive');
      $('#editSaveCard').css('color', 'black');
      $('#editSaveCard').removeClass('fa fa-floppy-o');
      $('#editSaveCard').addClass('icon ion-edit');
      $scope.notEditing = true;
    }
  };

  $scope.flipCard = function() {

  };

  // $scope.user = {
  //   name: 'Todd Kronenberg',
  //   job: 'Freelance Web Developer',
  //   location: 'Bay Area, CA',
  //   email: 'toddkronenberg@gmail.com',
  //   links: {
  //     website: 'https://toddkronenberg.com',
  //     blog: 'https://www.medium.com/@TK_CodeBear',
  //     github: 'https://github.com/theCodeBear'
  //   },
  //   skills: ['Node.js', 'Hapi.js', 'Angular', 'jQuery']
  // };

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
  $('#backgroundColorCardLabel').css('background-color', $scope.cardColor);
  $('#userCard').css('background-color', $scope.cardColor);

  $scope.changeBackgroundColor = function(color) {
    $('#userCard').css('background-color', color);
    $('#backgroundColorCardLabel').css('background-color', color);
  };

  $scope.changeLabelColor = function(color) {
    $(document.activeElement).css('color', color);
    $('#colorCardLabel').css('background-color', color);
  };
  // $('#colorCard').css('background-color', $scope.color);

}]);