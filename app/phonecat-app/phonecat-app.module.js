'use strict';

// define the 'phonecat app' module
angular.module('phonecatApp', [
    // ... which depends on the following modules
    'phoneList',
    'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/phonecat', {
            template: '<phone-list></phone-list>'
        })
    }])
    .controller('PhonecatAppController', [function () {
    }]);
