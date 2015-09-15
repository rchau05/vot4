'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CandidateEditCtrl
 * @description
 * # CandidateEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CandidateEditCtrl', function ($scope, $routeParams, Candidate, $location) {
  	$scope.editCandidate = true;
  	$scope.candidate = {};
  	Candidate.one($routeParams.id).get().then(function(candidate) {
  	$scope.candidate = candidate;
  		$scope.saveCandidate = function() {
  			$scope.movie.save().then(function() {
  				$location.path('/candidate/' + $routeParams.id);
  			});
  		};
 	  });
 	});
