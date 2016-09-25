angular.module("AirPortal").controller('mainController', ['$scope', 'login', ($scope, login) => {
  login.loginWithTicket(1);
}]);
