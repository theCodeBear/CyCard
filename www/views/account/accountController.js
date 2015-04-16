angular.module('cycard')

.controller('accountCtrl', ['$scope', '$animate', '$state', 'Users', function($scope, $animate, $state, Users) {

  Users.status($state.current.name);

  $scope.editSave = 'Edit';
  $scope.notEditing = true;

  $scope.toggleEditSave = function(text) {
    if (text === 'Edit') {
      $scope.editSave = 'Save';
      $('#editSave').addClass('button-positive');
      $('#editSave').removeClass('button-energized');
      $('#editSave').css('color', 'white');
      $scope.notEditing = false;
    } else {
      $scope.editSave = 'Edit';
      $('#editSave').addClass('button-energized');
      $('#editSave').removeClass('button-positive');
      $('#editSave').css('color', 'black');
      $scope.notEditing = true;
    }
  };

  $scope.logout = function() {
    $state.go('login');
  };

}]);