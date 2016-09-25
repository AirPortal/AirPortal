app.controller('hurryController', ['$scope', '$timeout', ($scope, $timeout) => {
  $('.modal-trigger').leanModal();
  $('#modal1').openModal();
  $scope.timeleft = 15;
  $scope.gate = 1;
  $scope.terminal = 1;
}]);
