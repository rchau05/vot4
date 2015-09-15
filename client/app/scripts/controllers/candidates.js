'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CandidatesCtrl
 * @description
 * # CandidatesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CandidatesCtrl', function ($scope, Candidate) {
  	// $scope.candidates=[{name: 'Bernie', party:'Democrat', votes:4}];
    $scope.candidates = Candidate.getList().$object;
  });
