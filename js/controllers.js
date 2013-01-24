function editorController($scope) {

  var converter = new Showdown.converter();


  $scope.title ="Hello World";

  $scope.markDownDocument = "";

  $scope.showSource = false;

  $scope.toggleSource = function() {
    if ($scope.showSource == false) {
      $scope.showSource = true;
    } else {
      $scope.showSource = false;
    }
  }  

  $scope.convertMarkDown = function(source) {
    return converter.makeHtml(source);
  }

}

editorController.$inject = ['$scope'];