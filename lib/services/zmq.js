var socket = null;
var port = 'tcp://127.0.0.1:2323';
// It's just sockets!
// http://zeromq.org/topics:omq-is-just-sockets
angular.
  module('nwng.zmq', []).
  factory('zmqPub', [function() {
    var zmq = require('zmq');
    var socket = zmq.socket('pub');
    socket.bind(port, function(err) {
      if (err) throw err;
    });
    return socket;
  }]).
  factory('zmqSub', [function() {
    var socket = zmq.socket('sub');
    socket.connect(port);
    return socket;
  }]);