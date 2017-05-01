'use strict';

// Declare app level module which depends on views, and components
angular.module('suiteApp', [
  // 'ngRoute',
   'phonecatApp'
])
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
.controller('MainCtrl', function($scope){
  $scope.apps = [
    {"id": 0, "name": "Eggly"},
    {"id": 1, "name": "App 2"},
    {"id": 2, "name": "App 3"},
    {"id": 3, "name": "App 4"},
  ];

  $scope.bookmarks = [
    {"id": 0, "title":"Bookmark 1", "url": "http://angularjs.og", "categorie":"Eggly"},
    {"id": 0, "title":"Bookmark 2", "url": "http://angularjs.og", "categorie":"App 2"},
    {"id": 0, "title":"Bookmark 3", "url": "http://angularjs.og", "categorie":"App 3"},
    {"id": 0, "title":"Bookmark 4", "url": "http://angularjs.og", "categorie":"App 4"},
  ]
});
