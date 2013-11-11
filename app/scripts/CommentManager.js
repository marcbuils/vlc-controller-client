define(['socket.io'], function (io) {
    var module = {
        _socket: null,
        
        connect: function (server) {
            this._socket = io.connect(server);
            
            return this;
        },
        
        vote: function (vote) {
            this._socket.emit('vote', {
                value : vote
            });
            
            return this;
        }
    };
    
    return module;
});