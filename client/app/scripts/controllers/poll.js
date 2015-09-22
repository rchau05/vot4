// Managing the poll list
angular.module('clientApp')
 // Managing the poll list
        .controller('PollListCtrl', function($scope) {
          $scope.polls = [];
        })
        // Voting / viewing poll results
        .controller('PollItemCtrl', function($scope, $routeParams) {
          $scope.poll = {};
          $scope.vote = function() {};
        })
        // Creating a new poll
        .controller('PollNewCtrl', function($scope) {
          $scope.poll = {
            question: '',
            choices: [{ text: '' }, { text: '' }, { text: '' }]
          };
          $scope.addChoice = function() {
            $scope.poll.choices.push({ text: '' });
          };
          $scope.createPoll = function() {};
        })