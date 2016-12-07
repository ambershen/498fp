//https://github.com/monterail/angular-date-range-picker

var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services', '720kb.datepicker', 'uiGmapgoogle-maps', 'mm.foundation']);
// .config(
    // ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
    //     GoogleMapApiProviders.configure({
    //         key: "AIzaSyB36qymfkWQerKp4IlgC0VO3kpMYOCett4",
    //         v: '3.20', //defaults to latest 3.X anyhow
    //         libraries: 'weather,geometry,visualization'
    //     });
    // }]);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/houses/:id', {
    templateUrl: 'partials/house_details.html',
    controller: 'HouseDetailView'
  }).
  when('/houses',{
    templateUrl: 'partials/houses.html',
    controller:'HouseListView'
  }).
  when('/login',{
    templateUrl: 'partials/login.html',
  }).
  when('/user',{
    templateUrl:'partials/user_details.html',
  }).
  otherwise({
    redirectTo: '/login'
  });
}]);
