app.controller('dashboardController', ['$scope', 'dashboardService', ($scope, dashboardService) => {
  dashboardService.weather().then(res => {
    $scope.temperatureScale = res.data.temperatureScale;
    $scope.temp = res.data.currentWeather.temperature;
    $scope.luggage = 'Ready!';
    $scope.waittime = 30;
  }, () => {

  });
}]);
