function editorController($scope) {

  var converter = new Showdown.converter();

  var windowHeight = $(window).height();

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

  $scope.resize = function() {
    $('.scale').css("height", windowHeight-61);
  }

  $scope.resize();

  $('#editMarkDown').focus();

}

editorController.$inject = ['$scope'];