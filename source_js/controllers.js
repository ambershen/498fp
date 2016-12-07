var mp4Controllers = angular.module('mp4Controllers', []);

mp4Controllers.controller('navbarController', [,function(){

}]);

mp4Controllers.controller('SignUpView', ['$scope','$location','$timeout','UsersGateway','$window', function($scope,$location,$timeout,UsersGateway,$window){
  $scope.formInfo = {};
  $scope.confirmPass = '';
  $scope.saveUser = function(){
    $scope.passwordMatch = '';
    if($scope.formInfo.password !== $scope.confirmPass){
      $scope.passwordMatch = 'Invalid Password';
    }else{
        // console.log($scope.formInfo);
        UsersGateway.post($scope.formInfo).success(
            function(data){
                $window.sessionStorage.userName = $scope.formInfo.name;
                $location.url('/houses');
            }
        ).error(function(data){
            $scope.passwordMatch = "error!"
        })
    }
  };
  $scope.login = function() {
      UsersGateway.get({where:{password:{$eq:$scope.password}, email:{$eq:$scope.email}}}).success(function(data){
         console.log(data);
          $window.sessionStorage.userName = data.data[0].name;
          $location.url('/houses');

      });
  };
}]);

mp4Controllers.controller('HouseListView', ['$scope','$window','$routeParams', 'HousesGateway', function($scope, $window, rp, HousesGateway){
  $scope.select = {
    _id: 1,
    intervals: 1,
    user: 1,
    is_bed: 1,
    is_coach: 1,
    description: 1,
    image_path: 1,
    rate: 1,
    university: 1,
    dateCreated: 1,
    location:1
  };
  $scope.name = $window.sessionStorage.userName;
  $scope.get = function() {
      var interval = {};
      var start = Date.parse($scope.start);
      var end = Date.parse($scope.end);
      if(!isNaN(start) && !isNaN(end)) {
          interval['start'] = new Date($scope.start);
          interval['end'] = new Date($scope.end);
      }
      console.log(interval);
      HousesGateway.get($scope.select, interval)
          .success(function (data) {
              console.log(data.data);
              $scope.houses = data.data;
          });
  };
  $scope.get();
}]);

mp4Controllers.controller('HouseDetailView', ['$scope', '$window', '$routeParams', 'HousesGateway', function($scope, $window, rp, HousesGateway){
  var id = rp.id;
  $scope.house = "";
    $scope.name = $window.sessionStorage.userName;

  HousesGateway.getOne(id).success(function(data){
    $scope.house= data.data;
    $scope.map = {center: {latitude: $scope.house.location.lat, longitude: $scope.house.location.lng}, zoom: 17};
    $scope.marker = {
      id: 0,
      coords: {
        latitude: $scope.house.location.lat,
        longitude: $scope.house.location.lng
      }
    };
  }).error(function(error){
  });
}]);

mp4Controllers.controller('UserDetailView', ['$scope', '$window', '$routeParams', 'UsersGateway', function($scope, $window, rp, UsersGateway){
  var id = rp.id;
  UsersGateway.getOne(id).success(function(data){
    $scope.user = data.data;
    console.log($scope.user);
  });
}]);