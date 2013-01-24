'use strict';

/* Directives */


angular.module('markDownEditor.directives', []).directive('markdown', function() {
    var converter = new Showdown.converter();
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var markDown = element.text();
            var htmlText = converter.makeHtml(markDown);
            element.html(htmlText);
        }
    }
  });