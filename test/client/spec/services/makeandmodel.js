'use strict';

describe('Service: makeandmodel', function () {

  // load the service's module
  beforeEach(module('appyApp'));

  // instantiate service
  var makeandmodel;
  beforeEach(inject(function (_makeandmodel_) {
    makeandmodel = _makeandmodel_;
  }));

  it('should do something', function () {
    expect(!!makeandmodel).toBe(true);
  });

});
