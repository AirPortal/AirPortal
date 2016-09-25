app.factory('login', ['$http', ($http) => {
  const obj = {};
  obj.loginWithTicket = num => {
    const data = {
      ticketNumber: num
    };
    $http.post('/login', data).then(res => {
      console.log(res);
    }, () => {

    });
  };
  return obj;
}]);
