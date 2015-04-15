

angular.module('cycard')

.controller('registerCtrl', ['$scope', '$state', function($scope, $state) {

  Parse.initialize("NgKfbIjZB8Q391Td73hd6V3vDURSuwGrGsCWnz2W", "0WsQdhNLw4wsGWP3Ws4K1WiFVwkmsWGQ3czEyFNE");


  $scope.register = function(input) {

    if (input.password === input.password2) {
      var User = Parse.Object.extend('Users');
      var user = new User();
      user.set('fullName', input.name);
      user.set('email', input.email);
      user.set('password', input.password);

      // then do the parse saving. But i need to switch
      // to the built in User object to have hashing of password
      user.save(null, {
        success: function(user) {
          // Execute any logic that should take place after the object is saved.
          alert('New object created with objectId: ' + user.id);
          $state.go('userCard');
        },
        error: function(user, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          alert('Failed to create new object, with error code: ' + error.message);
        }
      });
    }
  };



}]);