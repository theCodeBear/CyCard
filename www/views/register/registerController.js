angular.module('cycard')

.controller('registerCtrl', ['$scope', '$state', function($scope, $state) {

  $scope.register = function() {
    $state.go('userCard');
  };

}]);