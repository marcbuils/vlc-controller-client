define(["app", "underscore", "controllers/ModalVideoInformationCtrl"], function (app, _) {
    "use strict";
    
    app
      .controller("MainCtrl", ["$scope", "$http", "$modal", function ($scope, $http, $modal) {
          $http.get("liste-videos.json").success(function (videos) {
              $scope.videos = videos;
          });
          
          _.extend($scope, {
              showVideoInformation: function (video) {
                  $modal.open({
                      templateUrl: "views/videoInformation.html",
                      controller: "ModalVideoInformationCtrl",
                      resolve: {
                        video: function () {
                          return video;
                        }
                      }
                    });
              }
          });
      }]);
});
