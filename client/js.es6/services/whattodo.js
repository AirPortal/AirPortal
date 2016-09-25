app.factory('whattodoService', ['$http', ($http) => {
  const obj = {};
  obj.whattodo = () => (
    new Promise((resolve, reject) => {
      $http.get('/getTodo').then(res => {
        resolve(res.data);
      }, () => {

      });
    })
  );
  return obj;
}]);
