var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services', '720kb.datepicker', 'uiGmapgoogle-maps']);
// .config(
    // ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
    //     GoogleMapApiProviders.configure({
    //         key: "AIzaSyB36qymfkWQerKp4IlgC0VO3kpMYOCett4",
    //         v: '3.20', //defaults to latest 3.X anyhow
    //         libraries: 'weather,geometry,visualization'
    //     });
    // }]);

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
  otherwise({
    redirectTo: '/houses'
  });
}]);
