app.controller('dashboardController', ['$scope', 'dashboardService', ($scope, dashboardService) => {
  $scope.luggage = 'Ready!';
  $scope.waittime = 30;
  $scope.taxi = 24;
  $scope.subway = 56;
  dashboardService.weather().then(res => {
    $scope.temperatureScale = res.data.temperatureScale;
    $scope.temp = res.data.currentWeather.temperature;
  }, () => {

  });
}]);
