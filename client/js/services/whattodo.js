app.factory('whattodoService', ['$http', ($http) => {
  const obj = {};
  obj.whattodo = num => {
    $http.get('/getTodo').then(res => {
      console.log(res.data);
    }, () => {

    });
  };
  return obj;
}]);
