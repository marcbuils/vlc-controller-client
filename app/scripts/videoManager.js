// Gestion des vidéos sur l'interface cliente
// ------------------------------------------
//
// ** Interfaces d'entrées **  
// - Fonction lire  
//
// ** Interfaces de sortie **  
// - Commande Websocket play
//

/*jslint nomen: true*/
/*global define */
define([ 'underscore', 'require', 'config' ], function(_, require, config) {
    "use strict";

    var module = function() {
        if (!module.initialized) {
            module.initialize();
            module.initialized = true;
        }

        return module;
    };

    _.extend(module, {
        _initialized : false,

        // ** listeVideos **
        // Liste des vidéos disponibles
        //
        // Exemple d'utilisation:
        // > videoManager().listeVideo
        //
        listeVideos : {},

        _initialize : function() {
        },

        // ** update **
        // Met à jour de la liste des vidéos
        //
        // Exemple d'utilisation:
        // > videoManager().listeVideo
        //
        update : function() {
            require([ config.URL_LISTE_VIDEOS ], function(listeVideos) {
                this.listeVideos = listeVideos;
                // @todo: ajouter la gestion d'Angular
            });
        }
    });

    return module;
});