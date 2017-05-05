'use strict';

// define the 'phonecat app' module
angular.module('movieApp', [
    // ... which depends on the following modules
    'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movie', {
            template: '<h1>movie</h1>'
        })
    }])
    .controller('MovieAppController', [function () {
    }]);
