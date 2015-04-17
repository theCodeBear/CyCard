'use strict';

Parse.initialize("NgKfbIjZB8Q391Td73hd6V3vDURSuwGrGsCWnz2W", "0WsQdhNLw4wsGWP3Ws4K1WiFVwkmsWGQ3czEyFNE");

angular.module('cycard')

.factory('Cards', ['$q', '$rootScope', '$state', function($q, $rootScope, $state) {

// CREATE function to create a user's business card
  function create() {
    var Card = Parse.Object.extend('Cards');
    var card = new Card();
    card.set('userID', $rootScope.userId);
    card.set('fullName', $rootScope.userAttr.fullName);
    card.set('email', $rootScope.userAttr.email);
    card.save(null, {
      success: function(dbCard) {
        $state.go('userCard');
      },
      error: function(error) {
        alert('problem creating new card', error.message);
      }
    });
  }

// UPDATE function to update a user's business card
  function update(input) {
    var Card = Parse.Object.extend('Cards');
    var card = new Card();
    // console.log('id', $rootScope.userId);
    // console.log('name', input.name);
    card.set('userID', $rootScope.userId);
    card.set('fullName', input.name);
    card.set('email', input.email);
    card.set('job', input.job);
    card.set('location', input.location);
    card.set('links', input.links);
    card.set('skills', input.skills);
    card.set('picture', input.pictureUrl);
    card.set('colors', input.colors);
    card.set('backgroundColor', input.backgroundColor);
    card.save(null, {
      success: function(dbCard) {
        $rootScope.userCard = dbCard;
        // $state.go('userCard');
      },
      error: function(dbCard, error) {
        alert('problem saving card', error.message);
      }
    });
  }


// GET function to retrieve user's card for viewing
  function get(userID) {
    var deferred = $q.defer();
    var Card = Parse.Object.extend('Cards');
    var query = new Parse.Query(Card);
    query.equalTo('userID', userID);
    query.find({
      success: function(card) {
        if (card.length === 0) {
          alert('something went wrong! could not find the business card');
          deferred.resolve(false);
        } else {
          deferred.resolve(card[0].attributes);
        }
      },
      error: function(card, error) {
        alert('error getting the business card', error.message);
        deferred.reject(error);
      }
    });
    return deferred.promise;
  }


  return { create: create, update: update, get: get};


}]);