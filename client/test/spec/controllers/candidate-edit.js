'use strict';

describe('Controller: CandidateEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CandidateEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidateEditCtrl = $controller('CandidateEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CandidateEditCtrl.awesomeThings.length).toBe(3);
  });
});
