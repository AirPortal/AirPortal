app.factory('dashboardService', ['$http', ($http) => {
  const obj = {};
  obj.weather = () => (
    $http.get('/weather')
  );
  return obj;
}]);
