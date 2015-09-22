'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular',
    "googlechart"
  ])
  .config(function ($routeProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/candidates', {
        templateUrl: 'views/candidates.html',
        controller: 'CandidatesCtrl',
        controllerAs: 'candidates'
      })
      .when('/create/candidate', {
        templateUrl: 'views/candidate-add.html',
        controller: 'CandidateAddCtrl',
        controllerAs: 'candidateAdd'
      })
      .when('/candidate/:id', {
        templateUrl: 'views/candidate-view.html',
        controller: 'CandidateViewCtrl',
        controllerAs: 'candidateView'
      })
      .when('/candidate/:id/delete', {
        templateUrl: 'views/candidate-delete.html',
        controller: 'CandidateDeleteCtrl',
        controllerAs: 'candidateDelete'
      })
      .when('/candidate/:id/edit', {
        templateUrl: 'views/candidate-edit.html',
        controller: 'CandidateEditCtrl',
        controllerAs: 'candidateEdit'
      })
      .when('/election', {
        templateUrl:'views/election.html',
        controller: 'ElectionCtrl',
        controllerAs: 'election'
      })
      .when('/results', {
        templateUrl:'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .when('/signup', {
        templateUrl:'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl:'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/polls', {
        templateUrl:'views/list.html',
        controller: 'PollListCtrl',
        controllerAs: 'polls'
      })
      .when('/poll/:pollId', {
        templateUrl:'views/item.html',
        controller: 'PollItemCtrl',
        controllerAs: 'poll'
      })
      .when('/new', {
        templateUrl:'views/new.html',
        controller: 'PollNewCtrl',
        controllerAs: 'new'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .factory('CandidateRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
      id: '_id'
      });
    });
  })
  .factory('Candidate', function(CandidateRestangular) {
    return CandidateRestangular.service('candidate');
  });

