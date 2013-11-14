define(["app", "underscore", "jquery"], function (app, _, $) {
    "use strict";
    
    app
      .controller("NavbarCtrl", ["$scope", function ($scope) {
          $('[data-ng-controller="NavbarCtrl"] .navbar-nav [href]').on('click', function () {
              if ($('.navbar-toggle').is(':visible')) {
                  $('.navbar-collapse').collapse('hide');
              }
              
              $('[data-ng-controller="NavbarCtrl"] a').removeClass('active');
              $(this).addClass('active');
              
              window._gaq.push(['_trackEvent', 'menuItem', 'clicked', $(this).attr('href')]);
          });
      }]);
});
