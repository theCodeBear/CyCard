angular.module('cycard')

.controller('userCardCtrl', ['$scope', function($scope) {

  $scope.editSave = 'Edit';
  $scope.notEditing = true;

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

}]);