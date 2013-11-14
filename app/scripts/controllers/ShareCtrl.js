define(["app", "underscore"], function (app, _) {
    "use strict";
    
    app
      .controller("ShareCtrl", ["$scope", function ($scope) {
          $('.share a').on('click', function () {
              window._gaq.push(['_trackEvent', 'share', 'clicked', $(this).attr('href')]);
          });
      }]);
});
