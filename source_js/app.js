//https://github.com/monterail/angular-date-range-picker

var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services', '720kb.datepicker', 'uiGmapgoogle-maps', 'ui.calendar']);


app.filter('dateRange', function() {
  return function(input, startDate, endDate) {

    var retArray = [];

    angular.forEach(input, function(obj){
      var receivedDate = obj.received;

    });

    return retArray;
  };
});



app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/housedetails/:id', {
    templateUrl: 'partials/house_details.html',
    controller: 'HouseDetailView'
  }).
  when('/houses',{
    templateUrl: 'partials/houses.html',
    controller:'HouseListView'
  }).
  when('/login',{
    templateUrl: 'partials/login.html',
    controller: 'SignUpView'
  }).
  when('/user',{
    templateUrl:'partials/user_details.html',
  }).
  when('/signup',{
    templateUrl:'partials/signup.html',
    controller: 'SignUpView'
  }).
  otherwise({
    redirectTo: '/login'
  });
}]);
