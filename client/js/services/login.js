app.factory('login', ['$http', ($http) => {
  const obj = {};
  obj.loginWithTicket = num => (
    new Promise((resolve, reject) => {
      const data = {
        ticketNumber: num
      };
      $http.post('/login', data).then(res => {
        resolve("OK");
      }, () => {
        reject();
      });
    }
  ));
  return obj;
}]);
