'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CandidateDeleteCtrl
 * @description
 * # CandidateDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CandidateDeleteCtrl', function ($scope, $routeParams, Candidate, $location) {
  	$scope.candidate = Candidate.one($routeParams.id).get().$object;
  	$scope.deleteCandidate = function(){
  		$scope.candidate.remove().then(function() {
  			$location.path('/candidates');
  		});
  	};
  	$scope.back = function() {
  		$location.path('/candidate/' + $routeParams.id);
  	};
 	});
