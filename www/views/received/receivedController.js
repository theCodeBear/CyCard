angular.module('cycard')

.controller('receivedCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {

  // $rootScope.showNav = !!$state.current.name;
  // $('ion-header-bar').removeClass('ng-hide');

  // console.log('rec', $rootScope.showNav);
  $rootScope.loggedIn=true;
  $rootScope.showNav = true;
  // $scope.$apply($rootScope.showNav = true);

  // $scope.route = function(state) {
  //   if (!$rootScope.loggedIn)
  //     $state.go(state);
  // }

  $scope.fakeData = [
    {
      name: 'Todd Kronenberg', picture: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
      job: 'Freelance Web Developer', location: 'Bay Area, CA', email: 'toddkronenberg@gmail.com',
      skills: ['Node.js', 'Angular', 'RESTful API'], links: { blog: 'https://medium.com/@TK_CodeBear' }
    },
    {
      name: 'Kent Kronenberg', picture: 'http://wils.co.kr/images/Kent.JPG',
      job: 'English Teacher', location: 'Seoul, South Korea', email: 'kent.kronenberg@gmail.com',
      skills: ['Teaching', 'Business'], links: { website: 'www.toddkronenberg.com' }
    }
  ];

}]);