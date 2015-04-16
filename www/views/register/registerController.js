

angular.module('cycard')

.controller('registerCtrl', ['$scope', '$state', 'Users', function($scope, $state, Users) {

  Parse.initialize("NgKfbIjZB8Q391Td73hd6V3vDURSuwGrGsCWnz2W", "0WsQdhNLw4wsGWP3Ws4K1WiFVwkmsWGQ3czEyFNE");


  $scope.register = function(input) {
    if (input.password === input.password2) {
      Users.register(input.email, input.name, input.password);
    } else {
      alert('Passwords do not match');
    }
  };



}]);