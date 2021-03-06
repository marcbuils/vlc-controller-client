define(["app", "underscore", "CommentManager", "jquery.msg"], function (app, _, CommentManager) {
    "use strict";
    
    app
      .controller("CommentCtrl", ["$scope", function ($scope) {
          var commentManager = Object.create(CommentManager);
          
          _.extend($scope, {
              vote: function (vote) {
                  commentManager.vote(vote);
                  
                  $.msg({
                      content: "Merci pour avis."
                  });
              }
          });
      }]);
});
