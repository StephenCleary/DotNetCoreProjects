(function(){

var app = angular.module("App", ["ngSanitize", 'ui.bootstrap']);

app.controller("MyCtrl",['$scope', function($scope){
  
  $scope.display = 'projects';
  $scope.types = [];
  $scope.projects = [];

  for (var i = 0; i != data.length; ++i)
  {
    var project = data[i];
    var packages = [];
    for (var j = 0; j != project.packages.length; ++j)
    {
      var nuget = project.packages[j];
      packages.push(nuget.id);
      for (var k = 0; k != nuget.types.length; ++k)
      {
        var type = nuget.types[k];
        $scope.types.push({
          "namespace": type.namespace,
          "name": type.name,
          "fullName": type.namespace + "." + type.name,
          "description": type.description,
          "package": nuget.id,
          "project": project.id
        });
      }
    }
    $scope.projects.push({
      "project": project.id,
      "packages": packages,
      "description": project.description,
      "commonlyUsedTypes": project.commonlyUsedTypes
    });
  }

}]);

app.filter("allowwrap", function() {
  return function(input) {
    return input.replace(/\./g, '.&#8203;');
  };
});

app.filter('escapeHTML', function() {
  return function(text) {
    return text.
        replace(/&/g, '&amp;').
        replace(/</g, '&lt;').
        replace(/>/g, '&gt;').
        replace(/'/g, '&#39;').
        replace(/"/g, '&quot;');
  };
});

app.filter("dotsToDashes", function() {
  return function(input) {
    return input.replace(/\./g, '-');
  };
});

})();
