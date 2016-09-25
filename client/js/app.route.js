app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "./templates/landing.html"
  })
  .when("/hurry", {
    templateUrl : "./templates/hurry.html"
  .when("/dashboard", {
    templateUrl : "./templates/dashboard.html"
  })
  .when("/", {
    templateUrl : "./templates/landing.html"
  })
  .when("/map", {
    templateUrl : "./templates/map.html"
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
