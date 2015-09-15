'use strict';

describe('Controller: CandidateViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CandidateViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CandidateViewCtrl = $controller('CandidateViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CandidateViewCtrl.awesomeThings.length).toBe(3);
  });
});
