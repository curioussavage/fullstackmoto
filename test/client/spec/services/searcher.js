'use strict';

describe('Service: searcher', function () {

  // load the service's module
  beforeEach(module('appyApp'));

  // instantiate service
  var searcher;
  beforeEach(inject(function (_searcher_) {
    searcher = _searcher_;
  }));

  it('should do something', function () {
    expect(!!searcher).toBe(true);
  });

});
