'user strict';

angular.module('cycard')

.controller('loginCtrl', ['$scope', '$rootScope', '$state', 'Users', function($scope, $rootScope, $state, Users) {

  $scope.user = {email: '', password: ''};

  $scope.goToRegister = function() {
    $('input').val('');
    $state.go('register');
  };

  $scope.userLogin = function() {
    if ($('#loginFormId').css('display') === 'none') {
      $('#loginFormId').css('display', 'initial');
      $('#loginFormId').animate({ height: '89px'}, 400);
    } else {
      if ($scope.user.email !== '' && $scope.user.password !== '') {
        Users.login($scope.user.email, $scope.user.password).then(function(data) {
          $('input').val('');
          if (data)
            $state.go('received');
        });
      }
    }
  };
}]);