'use strict';

describe('Controller: CandidateAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CandidateAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidateAddCtrl = $controller('CandidateAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CandidateAddCtrl.awesomeThings.length).toBe(3);
  });
});
