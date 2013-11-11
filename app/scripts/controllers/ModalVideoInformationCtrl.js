// Affichage d'une vidéo
// ------------------------------------------
//

/*jslint nomen: true*/
/*global define */
define(["app", "underscore", "VlcControllerClient"], function (app, _, VlcControllerClient) {
    "use strict";

    app
      .controller("ModalVideoInformationCtrl", ["$scope", "$modalInstance", "$sce", "video", function ($scope, $modalInstance, $sce, video) {
          var vlcControllerClientTV = Object.create(VlcControllerClient).connecter('http://sandbox.marcbuils.fr:8081');
          var vlcControllerClientScreen = Object.create(VlcControllerClient).connecter('http://sandbox.marcbuils.fr:8082');
          
          _.extend($scope, {
             alerts: [],
             video: video,
             
             trustSrc: function(src) {
                 return $sce.trustAsResourceUrl(src);
             },
          
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
                 vlcControllerClientTV.play($scope.video.src);
                 $scope.alerts = [{
                     type: "success",
                     msg: "La vidéo a été envoyée sur le téléviseur"
                 }];
             },
             
             // *** playOnScreen() ***
             // Lit la vidéo demandée sur l'écran.
             // 
             // @return undefined
             //
             playOnScreen: function () {
                 vlcControllerClientScreen.play($scope.video.src);
                 $scope.alerts = [{
                     type: "success",
                     msg: "La vidéo a été envoyée sur l'écran transparent"
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
