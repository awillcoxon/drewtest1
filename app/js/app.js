'use strict';


// Declare app level module which depends on filters, and services
var recipeApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
                                config(['$routeProvider', function($routeProvider) {
                                $routeProvider.when('/view1', {templateUrl: 'partials/add.html', controller: 'NotesController'});
                                $routeProvider.otherwise({redirectTo: '/add'});
                               }]);
