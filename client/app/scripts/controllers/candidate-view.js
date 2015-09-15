'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CandidateViewCtrl
 * @description
 * # CandidateViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CandidateViewCtrl', function ($scope, $routeParams, Candidate) {
  	$scope.viewCandidate = true;
  	$scope.candidate = Candidate.one($routeParams.id).get().$object;
  });
