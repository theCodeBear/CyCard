angular.module('cycard')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('login', {
    url: '/',
    templateUrl: 'views/login/login.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'views/register/register.html'
  })

  .state('received', {
    url: '/received',
    templateUrl: 'views/received/received.html'
  })

  .state('sentTo', {
    url: '/sentTo',
    templateUrl: 'views/sentTo/sentTo.html'
  })

  .state('search', {
    url: '/search',
    templateUrl: 'views/search/search.html'
  })

  .state('userCard', {
    url: '/userCard',
    templateUrl: 'views/userCard/userCard.html'
  })

  .state('show/:id', {
    url: '/show',
    templateUrl: 'views/show/show.html'
  })

  .state('account', {
    url: '/account',
    templateUrl: 'views/account/account.html'
  })

}]);