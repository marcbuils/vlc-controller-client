define(['socket.io'], function (io) {
    var module = {       
        vote: function (vote) {
            window._gaq.push(['_trackEvent', 'vote', 'clicked', 'vote']);
            
            return this;
        }
    };
    
    return module;
});