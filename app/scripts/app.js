define([ "angular", 
         "bootstrap-affix", 
         "bootstrap-alert", 
         "bootstrap-dropdown",
         "bootstrap-tooltip", 
         "bootstrap-modal", 
         "bootstrap-transition",
         "bootstrap-button", 
         "bootstrap-popover", 
         "bootstrap-carousel",
         "bootstrap-scrollspy", 
         "bootstrap-collapse", 
         "bootstrap-tab",
         "angular-bootstrap",
         "angular-route",
         "angular-animate",
         "angular-sanitize"
], function(angular) {
    "use strict";

    return angular
        .module("vlcControlerClientApp", [ "ngRoute", "ngAnimate", "ngSanitize", "ui.bootstrap" ])
        .config(function ($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist(['^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?\(vimeo|youtube)\.com(/.*)?$', 'self']);
        });
});
