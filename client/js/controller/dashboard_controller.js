app.controller('dashboardController', ['$scope', '$location', 'dashboardService', 'ticket', ($scope, $location, dashboardService, ticket) => {
  if (!ticket.getTicket('record')) {
    return $location.path('/');
  }
  $scope.luggage = 'Ready!';
  $scope.waittime = 30;
  $scope.taxi = 24;
  $scope.subway = 56;
  $scope.ticketRecord = ticket.getTicket('record');
  console.log($scope.ticketRecord);
  dashboardService.weather().then(res => {
    $scope.temperatureScale = res.data.temperatureScale;
    $scope.temp = res.data.currentWeather.temperature;
  }, () => {

  });
}]);
