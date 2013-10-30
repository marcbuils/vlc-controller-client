require.config({
    paths: {
        "socket.io": "../bower_components/socket.io-client/dist/socket.io",
        "underscore": "../bower_components/lodash/lodash",
        "jquery": "../bower_components/jquery/jquery",
        "angular": "../bower_components/angular/angular",

        //build:js scripts/plugins.js
        "bootstrap-affix": "../bower_components/bootstrap-sass/js/affix",
        "bootstrap-alert": "../bower_components/bootstrap-sass/js/alert",
        "bootstrap-dropdown": "../bower_components/bootstrap-sass/js/dropdown",
        "bootstrap-tooltip": "../bower_components/bootstrap-sass/js/tooltip",
        "bootstrap-modal": "../bower_components/bootstrap-sass/js/modal",
        "bootstrap-transition": "../bower_components/bootstrap-sass/js/transition",
        "bootstrap-button": "../bower_components/bootstrap-sass/js/button",
        "bootstrap-popover": "../bower_components/bootstrap-sass/js/popover",
        "bootstrap-carousel": "../bower_components/bootstrap-sass/js/carousel",
        "bootstrap-scrollspy": "../bower_components/bootstrap-sass/js/scrollspy",
        "bootstrap-collapse": "../bower_components/bootstrap-sass/js/collapse",
        "bootstrap-tab": "../bower_components/bootstrap-sass/js/tab",

        //build:js scripts/modules.js
        "angular-resource": "../bower_components/angular-resource/angular-resource",
        "angular-cookies": "../bower_components/angular-cookies/angular-cookies",
        "angular-sanitize": "../bower_components/angular-sanitize/angular-sanitize"
    },
    shim: {
        "socket.io": {
            exports: "io"
        },
        "underscore": {
            exports: "_"
        },
        "jquery": {
            exports: "jQuery"
        },
        "angular": {
            exports: "angular",
            deps: [
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
                "bootstrap-tab"
            ]
        },
        "bootstrap-affix": {
            deps: ["jquery"]
        },
        "bootstrap-alert": {
            deps: ["jquery"]
        },
        "bootstrap-dropdown": {
            deps: ["jquery"]
        },
        "bootstrap-tooltip": {
            deps: ["jquery"]
        },
        "bootstrap-modal": {
            deps: ["jquery"]
        },
        "bootstrap-transition": {
            deps: ["jquery"]
        },
        "bootstrap-button": {
            deps: ["jquery"]
        },
        "bootstrap-popover": {
            deps: ["jquery"]
        },
        "bootstrap-carousel": {
            deps: ["jquery"]
        },
        "bootstrap-scrollspy": {
            deps: ["jquery"]
        },
        "bootstrap-collapse": {
            deps: ["jquery"]
        },
        "bootstrap-tab": {
            deps: ["jquery"]
        }
    }
});

require(["app", "controllers/main"], function (app) {
    "use strict";

    app
        .config(function ($routeProvider) {
            $routeProvider
              .when("/", {
                templateUrl: "views/main.html",
                controller: "MainCtrl"
              })
              .otherwise({
                redirectTo: "/"
              });
      });
    
    angular.bootstrap(document, ['vlcControlerClientApp']);
});