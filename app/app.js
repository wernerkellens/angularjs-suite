'use strict';

// Declare app level module which depends on views, and components
angular.module('suiteApp', [
  'ngRoute',
  'phonecatApp'
])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/home', {
        template: '<h1>Home</h1>'
      })
      .when('/app2', {
        template: '<h1>App 2</h1>'
      })
      .when('/app3', {
        template: '<h1>App 3</h1>'
      })
      .otherwise({ redirectTo: '/home' });
  }])
  .controller('MainCtrl', function ($scope) {
    $scope.apps = [
      { "id": 1, "name": "Phone Gallery", "href": '#!/phonecat' },
      { "id": 2, "name": "App 2", "href": '#!/app2' },
      { "id": 3, "name": "App 3", "href": '#!/app3' },
    ];
  });
