define(["angular", "app"], function (angular, app) {
    "use strict";
    
    app
      .controller("MainCtrl", function ($scope) {
        $scope.awesomeThings = [
          "HTML5 Boilerplate",
          "AngularJS",
          "Karma"
        ];
      });
});
