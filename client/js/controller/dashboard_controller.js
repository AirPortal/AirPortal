app.controller('dashboardController', ['$scope', '$location', 'dashboardService', 'ticket', 'whattodoService', '$timeout', ($scope, $location, dashboardService, ticket, whattodoService, $timeout) => {
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
  $scope.act = null;
  $scope.venue = null;
  $scope.imageSrc = "/assets/garden_icon.png";
  const getWhatToDo = () => {
    $('#modal1').openModal();
    return new Promise((resolve, reject) => {
      whattodoService.whattodo().then((res) => {
        console.log(res);
        $scope.act = res.action;
        $scope.venue = res.venue;

        $timeout(() => {
          $('.modal-trigger').leanModal({
            dismissible: true,
            in_duration: 200,
            out_duration: 200,
            complete: () => {
              $timeout(getWhatToDo, 1000);
              console.log("closed");
            }
          });
          resolve();
        }, 2);
      });
    });
  };
  $scope.getWhatToDo = getWhatToDo;

}]);
