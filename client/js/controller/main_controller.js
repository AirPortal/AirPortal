app.controller('mainController', ($scope, login) => {
	console.log("hi");
  login.loginWithTicket(1);
});
