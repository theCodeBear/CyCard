angular.module('cycard')

.controller('loginCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
  // console.log('loggedin: ', $rootScope.loggedIn);
  // if($rootScope.loggedIn === true)
  //   $state.go('received');

  // // console.log('login', $state.current.name);
  // $rootScope.showNav = false;
  // console.log('loggedin: ', $rootScope.loggedIn);

  // if ($rootScope.loggedIn)
  //   $state.go('received');

  $scope.login = function() {
    $rootScope.loggedIn = true;
    $state.go('register');
  };
}]);