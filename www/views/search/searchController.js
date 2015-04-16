angular.module('cycard')

.controller('searchCtrl', ['$scope', '$state', 'Users', function($scope, $state, Users) {

  Users.status($state.current.name);

  $scope.fakeDatabaseNames = [
    {name:'todd kronenberg'},
    {name:'kent kronenberg'},
    {name:'grant edward'},
    {name:'jose zamudio'},
    {name:'mj perez'},
    {name:'olga pritsch'}
  ];

  $scope.fakeData = [
    {
      firstName: 'Todd', lastName: 'Kronenberg', fullName: 'Todd Kronenberg', picture: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
      job: 'Freelance Web Developer', location: 'Bay Area, CA', email: 'toddkronenberg@gmail.com',
      skills: ['Node.js', 'Angular', 'RESTful API'], links: { blog: 'https://medium.com/@TK_CodeBear' }
    },
    {
      firstName: 'Kent', lastName: 'Kronenberg', fullName: 'Kent Kronenberg', picture: 'http://wils.co.kr/images/Kent.JPG',
      job: 'English Teacher', location: 'Seoul, South Korea', email: 'kent.kronenberg@gmail.com',
      skills: ['Teaching', 'Business'], links: { website: 'toddkronenberg.com' }
    },
    {
      firstName: 'Sandeep', lastName: 'Srivastava', fullName: 'Sandeep Srivastava', picture: 'http://cdn.codinghouse.co/images/people/sandeep.jpg',
      job: 'Full Stack Web Developer', location: 'Redwood City, CA', email: 'sandeep@mail.com',
      skills: ['Express.js', 'Angular', 'Bootstrap'], links: { twitter: 'https://twitter.com/TK_CodeBear' }
    },
    {
      firstName: 'Samer', lastName: 'Buna', fullName: 'Samer Buna', picture: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/194/32a/1efab8f.jpg',
      job: 'Senior Developer', location: 'Fremont, CA', email: 'sb@gmail.com',
      skills: ['Teaching', 'Rails', 'Ember.js'], links: { github: 'https://github.com/theCodeBear' }
    },
    {
      firstName: 'Todd', lastName: 'Kronenberg', fullName: 'Todd Kronenberg', picture: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
      job: 'Freelance Web Developer', location: 'Bay Area, CA', email: 'toddkronenberg@gmail.com',
      skills: ['Node.js', 'Angular', 'RESTful API'], links: { blog: 'https://medium.com/@TK_CodeBear' }
    },
    {
      firstName: 'Kent', lastName: 'Kronenberg', fullName: 'Kent Kronenberg', picture: 'http://wils.co.kr/images/Kent.JPG',
      job: 'English Teacher', location: 'Seoul, South Korea', email: 'kent.kronenberg@gmail.com',
      skills: ['Teaching', 'Business'], links: { website: 'toddkronenberg.com' }
    },
    {
      firstName: 'Sandeep', lastName: 'Srivastava', fullName: 'Sandeep Srivastava', picture: 'http://cdn.codinghouse.co/images/people/sandeep.jpg',
      job: 'Full Stack Web Developer', location: 'Redwood City, CA', email: 'sandeep@mail.com',
      skills: ['Express.js', 'Angular', 'Bootstrap'], links: { twitter: 'https://twitter.com/TK_CodeBear' }
    },
    {
      firstName: 'Samer', lastName: 'Buna', fullName: 'Samer Buna', picture: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/194/32a/1efab8f.jpg',
      job: 'Senior Developer', location: 'Fremont, CA', email: 'sb@gmail.com',
      skills: ['Teaching', 'Rails', 'Ember.js'], links: { github: 'https://github.com/theCodeBear' }
    }
  ];

  // $scope.searchDB = function(search) {
  //   return function(person) {
  //     person = person.toLowerCase();
  //     search = search.toLowerCase();
  //     return angular.equals(person, search);
  //   }
  // };

  // $scope.searchDB = function(query, person) {
  //   return function(query, person) {
  //     person.firstName = person.firstName.toLowerCase();
  //     query = query.toLowerCase();
  //     return person.firstName.match(query);
  //   }
  // };

  $scope.search = '';
  $scope.showList = function() {
    console.log('typed');
    if ($('#searchList').hasClass('ng-hide'))
      $('#searchList').removeClass('ng-hide');
    // if ($scope.search.length < 1)
      // $('#searchList').addClass('ng-hide');
  };

}]);