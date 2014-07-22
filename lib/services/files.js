angular.
  module('nwng.fs', []).
  factory('fs', [function() {
    var fs = require('fs');
    return fs;
  }]);