'use strict';

describe('Controller: PhotouploadCtrl', function () {

  // load the controller's module
  beforeEach(module('appyApp'));

  var PhotouploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotouploadCtrl = $controller('PhotouploadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
