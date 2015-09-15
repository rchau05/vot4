'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CandidateAddCtrl
 * @description
 * # CandidateAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CandidateAddCtrl', function ($scope, Candidate, $location) {
  	$scope.candidate = {};
  	$scope.saveCandidate = function(){
  		Candidate.post($scope.candidate).then(function(){
  			$location.path('/candidates');
  		});
  	};
  });
