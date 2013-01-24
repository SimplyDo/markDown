function editorController($scope) {

  var converter = new Showdown.converter();


  $scope.title ="Hello World";

  $scope.markDownDocument = "test";

  $scope.convertMarkDown = function(source) {

    return converter.makeHtml(source);
  }
  
}

editorController.$inject = ['$scope'];