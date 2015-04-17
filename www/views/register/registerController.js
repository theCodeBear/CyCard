

angular.module('cycard')

.controller('registerCtrl', ['$scope', '$state', 'Users', function($scope, $state, Users) {

  Parse.initialize("NgKfbIjZB8Q391Td73hd6V3vDURSuwGrGsCWnz2W", "0WsQdhNLw4wsGWP3Ws4K1WiFVwkmsWGQ3czEyFNE");

  // console.log('state', $state.current.name);
  Users.status($state.current.name);

  $scope.register = function(input) {
    if (input.password === input.password2) {
      Users.register(input.email, input.name, input.password);
      // console.log({ fullName: { name: input.name }, email: { address: input.email } });
      // Cards.save({ fullName: { name: input.name }, email: { address: input.email } });
      // Cards.save(input);
      // $state.go('userCard');
    } else {
      alert('Passwords do not match');
    }
  };



}]);