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

    var module = {
        _socket : null,

        connecter : function(server) {
            this._socket = io.connect(server);
            
            return this;
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
            
            return this;
        }
    };

    return module;
});