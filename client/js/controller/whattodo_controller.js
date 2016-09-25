app.controller('whattodoController', ['$scope', 'whattodoService', '$timeout', ($scope, whattodoService, $timeout) => {
  $scope.flightNo = "AF747";
  $scope.destination = "SFO";
  $scope.flightstatus = "on time";
  $scope.hoursLeft = 3;
  $scope.minutesLeft = 40;
  $scope.act = null;
  $scope.venue = null;
  const getWhatToDo = () => {
    return new Promise((resolve, reject) => {
      whattodoService.whattodo().then((res) => {
        console.log(res);
        $scope.act = res.action;
        $scope.venue = res.venue;

        $timeout(() => {
          $('.modal-trigger').leanModal({
            dismissible: false,
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
  getWhatToDo().then(() => {
    $('#modal1').openModal();
  });
}]);
