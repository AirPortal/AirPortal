angular.module("AirPortal").controller('mainController', ['$scope', 'login', ($scope, login) => {
	console.log("hi");
  login.loginWithTicket(1);
}]);
