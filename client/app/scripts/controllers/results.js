angular.module('clientApp')

.controller('ResultsCtrl', ['$scope', function ($scope) {
	$scope.chartObject = {};
    
    $scope.chartObject.type = "PieChart";
    
    $scope.onions = [
        {v: "Bernie Sanders"},
        {v: 35},
    ];

    $scope.chartObject.data = {"cols": [
        {id: "t", label: "Topping", type: "string"},
        {id: "s", label: "Slices", type: "number"}
    ], "rows": [
        {c: [
            {v: "Hillary Clinton"},
            {v: 28},
        ]},
        {c: $scope.onions},
        {c: [
            {v: "Jill Stein"},
            {v: 27}
        ]},
        {c: [
            {v: "Jeb Bush"},
            {v: 10},
        ]},
        {c: [
            {v: "Donald Trump"},
            {v: 2},
        ]}
    ]};

    $scope.chartObject.options = {
        'title': 'Youth Vote Presidential Results'
    };

    console.log('scope object', $scope.chartObject)
  }]);