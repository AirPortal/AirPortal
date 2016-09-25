app.service('login', ($http) => {
  const successCallback = res => {

  };
  const data = {

  };
  $http.post('/login', data).then(successCallback, errorCallback);
});
