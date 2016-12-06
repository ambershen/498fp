var mp4Services = angular.module('mp4Services', []);


var baseUrl = "http://216.171.2.19:4000";

mp4Services.factory('HousesGateway', function($http) {
    var url = baseUrl + "/api/houses";
   return {
       get: function(select) {
           return $http.get(url, {params: {select: select}});
       },
       getOne: function(id) {
           return $http.get(url+'/'+ id);
       },
       post : function(house) {
           return $http.post(url, house);
       },
       put : function(house) {
           return $http.put(url+ '/' + house._id, house);
       },
       delete : function(id) {
           return $http.delete(url + '/' + id);
       }
   }
});

mp4Services.factory('UsersGateway', function($http) {
    var url = baseUrl + "/api/users";
    return {
        get: function(select) {
            return $http.get(url, {params: {select: select}});
        },
        getOne: function(id) {
            return $http.get(url+'/'+ id);
        },
        post : function(user) {
            return $http.post(url, house);
        },
        put : function(user) {
            return $http.put(url+ '/' + user._id, house);
        },
        delete : function(id) {
            return $http.delete(url + '/' + id);
        }
    }
});