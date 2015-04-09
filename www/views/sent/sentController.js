angular.module('cycard')

.controller('sentCtrl', ['$scope', function($scope) {

  $scope.fakeData = [
    {
      name: 'Todd Kronenberg', picture: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
      job: 'Freelance Web Developer', location: 'Bay Area, CA', email: 'toddkronenberg@gmail.com',
      skills: ['Node.js', 'Angular', 'RESTful API'], links: { blog: 'https://medium.com/@TK_CodeBear' }
    },
    {
      name: 'Kent Kronenberg', picture: 'http://wils.co.kr/images/Kent.JPG',
      job: 'English Teacher', location: 'Seoul, South Korea', email: 'kent.kronenberg@gmail.com',
      skills: ['Teaching', 'Business'], links: { website: 'toddkronenberg.com' }
    },
    {
      name: 'Sandeep Srivastava', picture: 'http://cdn.codinghouse.co/images/people/sandeep.jpg',
      job: 'Full Stack Web Developer', location: 'Redwood City, CA', email: 'sandeep@mail.com',
      skills: ['Express.js', 'Angular', 'Bootstrap'], links: { twitter: 'https://twitter.com/TK_CodeBear' }
    },
    {
      name: 'Samer Buna', picture: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/194/32a/1efab8f.jpg',
      job: 'Senior Developer', location: 'Fremont, CA', email: 'sb@gmail.com',
      skills: ['Teaching', 'Rails', 'Ember.js'], links: { github: 'https://github.com/theCodeBear' }
    },
    {
      name: 'Todd Kronenberg', picture: 'https://avatars0.githubusercontent.com/u/7008257?v=3&s=460',
      job: 'Freelance Web Developer', location: 'Bay Area, CA', email: 'toddkronenberg@gmail.com',
      skills: ['Node.js', 'Angular', 'RESTful API'], links: { blog: 'https://medium.com/@TK_CodeBear' }
    },
    {
      name: 'Kent Kronenberg', picture: 'http://wils.co.kr/images/Kent.JPG',
      job: 'English Teacher', location: 'Seoul, South Korea', email: 'kent.kronenberg@gmail.com',
      skills: ['Teaching', 'Business'], links: { website: 'toddkronenberg.com' }
    },
    {
      name: 'Sandeep Srivastava', picture: 'http://cdn.codinghouse.co/images/people/sandeep.jpg',
      job: 'Full Stack Web Developer', location: 'Redwood City, CA', email: 'sandeep@mail.com',
      skills: ['Express.js', 'Angular', 'Bootstrap'], links: { twitter: 'https://twitter.com/TK_CodeBear' }
    },
    {
      name: 'Samer Buna', picture: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/194/32a/1efab8f.jpg',
      job: 'Senior Developer', location: 'Fremont, CA', email: 'sb@gmail.com',
      skills: ['Teaching', 'Rails', 'Ember.js'], links: { github: 'https://github.com/theCodeBear' }
    }
  ];

}]);