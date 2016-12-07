var mp4Services = angular.module('mp4Services', []);


var baseUrl = "";

mp4Services.factory('HousesGateway', function($http) {
    var url = baseUrl + "/api/houses";
   return {
       get: function(select, interval) {
           var params = {select: select};
           if(!jQuery.isEmptyObject(interval))
           {
                params['where'] = {intervals: {
                    $not: {
                        $elemMatch: {
                            start: {$lt: interval.end},
                            end: {$gt: interval.end}
                        }
                    }}
                }
           }
           return $http.get(url, {params: params});
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
        get: function(params) {
            return $http.get(url, {params: params});
        },
        getOne: function(id) {
            return $http.get(url+'/'+ id);
        },
        post : function(user) {
            return $http.post(url, user);
        },
        put : function(user) {
            return $http.put(url+ '/' + user._id, user);
        },
        delete : function(id) {
            return $http.delete(url + '/' + id);
        }
    }
});