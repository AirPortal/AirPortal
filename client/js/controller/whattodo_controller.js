app.controller('whattodoController', ['$scope', ($scope) => {
  $scope.flightNo = "AF747";
  $scope.destination = "SFO";
  $scope.flightstatus = "on time";
  $scope.hoursLeft = 3;
  $scope.minutesLeft = 40;
  $('.modal-trigger').leanModal();
  $('#modal1').openModal();
}]);
