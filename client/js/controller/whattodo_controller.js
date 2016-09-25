app.controller('whattodoController', ['$scope', 'whattodoService', ($scope, whattodoService) => {
  $scope.flightNo = "AF747";
  $scope.destination = "SFO";
  $scope.flightstatus = "on time";
  $scope.hoursLeft = 3;
  $scope.minutesLeft = 40;
  $scope.act = null;
  $scope.venue = null;
  whattodoService.whattodo().then((res) => {
    console.log(res);
    $scope.act = res.action;
    $scope.venue = res.venue;
  });
  $('.modal-trigger').leanModal();
  $('#modal1').openModal();
}]);
