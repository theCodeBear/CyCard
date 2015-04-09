angular.module('cycard')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('login', {
    url: '/',
    templateUrl: 'views/login/login.html',
    controller: 'loginCtrl'
  })

  .state('register', {
    url: '/register',
    templateUrl: 'views/register/register.html',
    controller: 'registerCtrl'
  })

  // .state('received', {
  //   url: '/received',
  //   views: {
  //     'navbar': {
  //       templateUrl: 'views/navbar/navbar.html',
  //       controller: 'navbarCtrl'
  //     },
  //     'main': {
  //       templateUrl: 'views/received/received.html',
  //     }
  //   }
  // })

  .state('received', {
    url: '/received',
    templateUrl: 'views/received/received.html',
    controller: 'receivedCtrl'
  })

  .state('sent', {
    url: '/sent',
    templateUrl: 'views/sent/sent.html',
    controller: 'sentCtrl'
  })

  .state('search', {
    url: '/search',
    templateUrl: 'views/search/search.html',
    controller: 'searchCtrl'
  })

  .state('userCard', {
    url: '/userCard',
    templateUrl: 'views/userCard/userCard.html',
    controller: 'userCardCtrl'
  })

  .state('show/:id', {
    url: '/show',
    templateUrl: 'views/show/show.html',
    controller: 'showCtrl'
  })

  .state('account', {
    url: '/account',
    templateUrl: 'views/account/account.html',
    controller: 'accountCtrl'
  })

}]);