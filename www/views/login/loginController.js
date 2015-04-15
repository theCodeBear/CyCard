angular.module('cycard')

.controller('loginCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {

  var login = false;

  $scope.goToRegister = function() {
    $('input').val('');
    $state.go('register');
  };

  $scope.login = function() {
    if (login === false) {
      $('#loginFormId').css('display', 'initial');
      $('#loginFormId').animate({ height: '89px'}, 400);
      login = true;
    } else if (login === true) {
      $rootScope.loggedIn = true;
      $('input').val('');
      $state.go('received');
    }
  };
}]);