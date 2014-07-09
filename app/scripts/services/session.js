'use strict';

angular.module('appyApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
