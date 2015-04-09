angular.module('cycard')

.controller('navbarCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.title = $location.path().substr(1).capitalize();

  // $('.settingsDropDown').css('display', 'none');
  // console.log($('.settingsDropDown').css('display'));

  $scope.displayMenu = function() {
    console.log('in the nav');
    if ($('.settingsDropDown').css('display') === 'none')
      $('.settingsDropDown').css('display', 'initial');
    else
      $('.settingsDropDown').css('display', 'none');
    console.log($('.settingsDropDown').css('display'));
  };

  $scope.closeMenu = function() {
    $('.settingsDropDown').css('display', 'none');
  };

}]);

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substr(1);
};