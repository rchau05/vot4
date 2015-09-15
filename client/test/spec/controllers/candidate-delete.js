'use strict';

describe('Controller: CandidateDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CandidateDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidateDeleteCtrl = $controller('CandidateDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CandidateDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
