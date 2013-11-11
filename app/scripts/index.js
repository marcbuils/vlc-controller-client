require.config({
    paths: {
        "socket.io": "../bower_components/socket.io-client/dist/socket.io",
        "underscore": "../bower_components/lodash/lodash",
        "jquery": "../bower_components/jquery/jquery",
        "angular": "../bower_components/angular/angular",
        "angular-route": "../bower_components/angular-route/angular-route",
        "angular-animate": "../bower_components/angular-animate/angular-animate",
        "angular-sanitize": "../bower_components/angular-sanitize/angular-sanitize",
        "angular-bootstrap": "../bower_components/angular-bootstrap/ui-bootstrap-tpls",
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
        "angular-resource": "../bower_components/angular-resource/angular-resource",
        "angular-cookies": "../bower_components/angular-cookies/angular-cookies",
        'jquery.center': "../bower_components/jquery.msg/jquery.center.min",
        'jquery.msg': "../bower_components/jquery.msg/jquery.msg",
        "almond": "../bower_components/almond/almond"
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
            exports: "angular"
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
        },
        "angular-bootstrap": {
            deps: ["angular"]
        },
        "angular-route": {
            deps: ["angular"]
        },
        "angular-animate": {
            deps: ["angular"]
        },
        "angular-sanitize": {
            deps: ["angular"]
        },
        'jquery.center': {
            deps: ['jquery']
        },
        'jquery.msg': {
            deps: ['jquery', 'jquery.center']
        },
    }
});

require(["app", "controllers/MainCtrl", "controllers/CommentCtrl", "controllers/ShareCtrl", "controllers/NavbarCtrl"], function (app) {
    "use strict";

    app
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider
              .when("/", {
                templateUrl: "views/main.html",
                controller: "MainCtrl"
              })
              .when("/votre-avis-nous-interesse", {
                templateUrl: "views/comment.html",
                controller: "CommentCtrl"
              })
              .when("/partagez-cette-application", {
                templateUrl: "views/share.html",
                controller: "ShareCtrl"
              })
              .otherwise({
                redirectTo: "/"
              });
      }]);
    
    angular.bootstrap(document, ['vlcControlerClientApp']);
});