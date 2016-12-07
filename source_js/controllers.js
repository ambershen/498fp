var mp4Controllers = angular.module('mp4Controllers', []);

mp4Controllers.controller('SignUpView', ['$scope','$location','$timeout', function($scope,$location,$timeout){
  $scope.formInfo = {};
  $scope.confirmPass = '';
  $scope.saveUser = function(){
    $scope.passwordMatch = '';
    if($scope.formInfo.Password !== $scope.confirmPass){
      $scope.passwordMatch = 'Invalid Password';
    }
    UsersGateway.put()
  };
}]);
mp4Controllers.controller('HouseListView', ['$scope','$window','$routeParams', 'HousesGateway', function($scope, $window, rp, HousesGateway){
  $scope.startDate = new Date();
  $scope.endDate = new Date();
  $scope.checkDate = function(){
    if($scope.endDate <= $scope.startDate){
      console.log($scope.endDate);
      alert("This is not a valid time period");
    }
  };
  
}]);
mp4Controllers.controller('HouseDetailView', ['$scope', '$window', '$routeParams', 'HousesGateway', function($scope, $window, rp, HousesGateway){
  var id = rp.id;
  $scope.house = "";

  HousesGateway.getOne(id).success(function(data){
    // window.alert(1);
    console.log(data.data);
    console.log('hi');
    $scope.house= data.data;
    $scope.map = {center: {latitude: $scope.house.location.lat, longitude: $scope.house.location.lng}, zoom: 14};
    console.log($scope.map);
  }).error(function(error){
    // alert(error);
  });
}]);

mp4Controllers.controller('UserDetailView', ['$scope', '$window', '$routeParams', 'UsersGateway', function($scope, $window, rp, UsersGateway){
  var id = rp.id;
  UsersGateway.getOne(id).success(function(data){
    $scope.user = data.data;
    console.log($scope.user);
  });
}]);