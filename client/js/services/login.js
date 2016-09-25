app.service('login', ($http) => {
  this.loginWithTicket = num => {
    const data = {
      ticketNumber: num
    };
    $http.post('/login', data).then(res => {
      console.log(res);
    }, () => {

    });
  };
});
