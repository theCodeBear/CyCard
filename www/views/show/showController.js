angular.module('cycard')

.controller('showCtrl', ['$scope', '$state', 'Users', function($scope, $state, Users) {

  Users.status($state.current.name);

}]);