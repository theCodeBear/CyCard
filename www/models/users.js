'user strict';

Parse.initialize("NgKfbIjZB8Q391Td73hd6V3vDURSuwGrGsCWnz2W", "0WsQdhNLw4wsGWP3Ws4K1WiFVwkmsWGQ3czEyFNE");

angular.module('cycard')

.factory('Users', ['$q', '$rootScope', '$state', function($q, $rootScope, $state) {

// LOGIN METHOD
  var login = function(email, password) {
    var deferred = $q.defer();
    var User = Parse.Object.extend('Users');
    var query = new Parse.Query(User);
    query.equalTo('email', email);
    query.equalTo('password', password);
    query.find({
      success: function(results) {
        if (results.length === 0) {
          alert('incorrect email or password');
          deferred.resolve(false);
        } else {
          $rootScope.userAttr = results[0].attributes;
          $rootScope.userId = results[0].id;
          deferred.resolve(results);
        }
      },
      error: function(error) {
        deferred.reject(error);
      }
    });
    return deferred.promise;
  };

// REGISTER METHOD
  var register = function(email, name, password) {
    var User = Parse.Object.extend('Users');
    var query = new Parse.Query(User);
    query.equalTo('email', email);
    query.find({
      success: function(results) {
        // If email not found in database, created new user
        if (results.length === 0) {
          var user = new User();
          user.set('email', email);
          user.set('fullName', name);
          user.set('password', password);
          user.save(null, {
            success: function(dbUser) {
              $rootScope.userAttr = dbUser.attributes;
              $rootScope.userId = dbUser.id;
              $state.go('userCard');
            },
            error: function(dbUser, error) {
              alert('problem with saving to database', error.message);
            }
          });
        } else {  // if email found, alert user
          alert('You have already created an account with that email');
        }
      },
      error: function(error) {
        alert('error in register find', error.message);
      }
    });    
  }

// STATUS METHOD TO CHECK LOGIN STATUS OF USER
  var status = function(state) {
    if ($rootScope.userId) {
      // if logged in the user can't go to login or register states
      if (state === 'login' || state === 'register')
        $state.go('received');
    } else {
      // if not logged in take user to login state if user is inside the app
      if (state !== 'login' && state !== 'register')
        $state.go('login');
    }
  };

// LOGOUT METHOD
  var logout = function() {
    delete $rootScope.userAttr;
    delete $rootScope.userId;
    $state.go('login');
  };





  return { login: login, register: register, status: status, logout: logout };

}]);