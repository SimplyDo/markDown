'use strict';


// Declare app level module which depends on filters, and services
angular.module('markDownEditor', ['markDownEditor.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/editor', {templateUrl: 'partials/editor.html', controller: 'editorController'});
    $routeProvider.otherwise({redirectTo:'/editor'});
  }]);