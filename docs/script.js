(function(){

var app = angular.module("App", ["ngSanitize", 'ui.bootstrap']);

app.controller("MyCtrl",['$scope', function($scope){
  
  $scope.projects = [];

  for (var i = 0; i != data.length; ++i)
  {
    var project = data[i];
    $scope.projects.push({
      "project": project.id,
      "packages": project.packages,
      "description": project.description,
      "commonlyUsedTypes": project.commonlyUsedTypes
    });
  }

}]);

app.filter("dotsToDashes", function() {
  return function(input) {
    return input.replace(/\./g, '-');
  };
});

})();
