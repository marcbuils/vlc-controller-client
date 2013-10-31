// Affichage d'une vidéo
// ------------------------------------------
//

/*jslint nomen: true*/
/*global define */
define(["angular", "app", "underscore", "vlcControllerClient"], function (angular, app, _, vlcControllerClient) {
    "use strict";

    app
      .controller("ModalVideoInformation", ["$scope", "$modalInstance", "video", function ($scope, $modalInstance, video) {
          _.extend($scope, {
             alerts: [],
             video: video,
             
             // *** close() ***
             // Ferme la boite de dialogue
             // 
             // @return undefined
             //
             close: function () {
                 $modalInstance.close();
             },
             
             // *** playOnTV() ***
             // Lit la vidéo demandée sur l'écran.
             // 
             // @return undefined
             //
             playOnTV: function () {
                 vlcControllerClient().play($scope.video.src);
                 $scope.alerts = [{
                     type: "success",
                     msg: "La vidéo a été envoyée sur l'écran"
                 }];
             },
             
             // *** closeAlert() ***
             // Suppression d'un message d'information.
             // 
             // @param index Position du message à suppripmer
             // @return undefined
             //
             closeAlert: function (index) {
                 $scope.alerts.splice(index, 1);
             }
          });
        }]);
});
