angular.module('cycard')

.controller('accountCtrl', ['$scope', '$animate', '$state', function($scope, $animate, $state) {

  $scope.editSave = 'Edit';
  $scope.notEditing = true;

  $scope.toggleEditSave = function(text) {
    if (text === 'Edit') {
      $scope.editSave = 'Save';
      $(editSave).addClass('button-positive');
      $(editSave).removeClass('button-energized')
      $scope.notEditing = false;
    } else {
      $scope.editSave = 'Edit';
      $(editSave).addClass('button-energized');
      $(editSave).removeClass('button-positive');
      $scope.notEditing = true;
    }
  };

  $scope.logout = function() {
    $state.go('login');
  };

}]);