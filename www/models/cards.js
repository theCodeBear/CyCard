'use strict';

Parse.initialize("NgKfbIjZB8Q391Td73hd6V3vDURSuwGrGsCWnz2W", "0WsQdhNLw4wsGWP3Ws4K1WiFVwkmsWGQ3czEyFNE");

angular.module('cycard')

.factory('Cards', ['Users', '$q', '$rootScope', function(Users, $q, $rootScope) {

// CREATE function to create or update a user's business card
  function save(card) {
    var Card = Parse.Object.extend('Cards');
    var card = new Card();
    card.set('fullName', { name: card.fullName.name, color: card.fullName.name });
    card.set('job', { job: card.job.title, color: card.job.color });
    card.set('email', { email: card.email.address, color: card.email.color });
    card.set('links', card.links);
    card.set('skills', card.skills);
    card.set('picture', card.pictureUrl);
    card.set('backgroundColor', card.backgroundColor);
    card.save(null, {
      success: function(dbCard) {
        $rootScope.userCard = dbCard;
      },
      error: function(dbCard, error) {
        alert('problem creating new card', error.message);
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
          alert('card found');
          deferred.resolve(card);
        }
      },
      error: function(card, error) {
        alert('error getting the business card', error.message);
        deferred.reject(error);
      }
    });
    return deferred.promise;
  }


  return { save: save, get: get};


}]);