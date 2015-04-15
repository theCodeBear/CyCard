angular.module('cycard')

.controller('loginCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {

  Parse.initialize("NgKfbIjZB8Q391Td73hd6V3vDURSuwGrGsCWnz2W", "0WsQdhNLw4wsGWP3Ws4K1WiFVwkmsWGQ3czEyFNE");
  var login = false;
  $scope.user = {};

  $scope.goToRegister = function() {
    $('input').val('');
    $state.go('register');
  };

  $scope.userLogin = function() {
    if (login === false) {
      $('#loginFormId').css('display', 'initial');
      $('#loginFormId').animate({ height: '89px'}, 400);
      login = true;
    } else if (login === true) {
      // $rootScope.loggedIn = true;
      // console.log('ng:', $scope.user.email, $scope.user.password);
      if ($scope.user.email !== undefined && $scope.user.password !== undefined) {
        // check parse for user
        var User = Parse.Object.extend('Users');
        var query = new Parse.Query(User);
        query.equalTo('email', $scope.user.email);
        query.equalTo('password', $scope.user.password);
        query.find({
          success: function(results) {
            if (results.length === 0) {
              alert('incorrect email or password');
              $('input').val('');
            } else {
              console.log(results[0].attributes);
              console.log(results[0].id);
              $state.go('received');
            }
          },
          error: function(error) {
            alert('user not found in db');
          }
        });
      }
    }
  };
}]);