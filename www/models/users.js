'user strict';

Parse.initialize("NgKfbIjZB8Q391Td73hd6V3vDURSuwGrGsCWnz2W", "0WsQdhNLw4wsGWP3Ws4K1WiFVwkmsWGQ3czEyFNE");

angular.module('cycard')

.factory('Users', ['$q', '$rootScope', function($q, $rootScope) {

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



  return { login: login };

}]);