// Client de controle pour VLC
// ----------------------------
//
// ** Interfaces d'entrées **  
// - Fonction lire  
//
// ** Interfaces de sortie **  
// - Commande Websocket play
//

/*jslint nomen: true*/
/*global define*/
define([ 'underscore', 'socket.io' ], function(_, io) {
    "use strict";

    var module = function() {
        if (!module._initialized) {
            module._initialize();
            module._initialized = true;
        }

        return module;
    };

    _.extend(module, {
        _initialized : false,
        _socket : null,

        _initialize : function() {
            this._connecter();
        },

        _connecter : function() {
            this._socket = io.connect('http://localhost:8081');
        },

        // *** play(cheminVideo) ***
        // Lit la vidéo demandée, sur le serveur.
        // 
        // @param struct cheminVideo
        // @return undefined
        //
        play : function(cheminVideo) {
            this._socket.emit('play', {
                input : cheminVideo
            });
        }
    });

    return module;
});