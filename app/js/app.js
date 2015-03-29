'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('squareApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/templates/home.html',
    controller: 'mainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
