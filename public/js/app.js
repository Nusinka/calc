angular.module('calcApp', []).controller('calcCtrl', function ($scope) {
    $scope.output = 0;
    $scope.addDigit = function (num) {
        if (num === 'C') {
            $scope.output = 0;
            return;
        }
        if (typeof(num) == 'number') {
            $scope.output += num;

        }

    };

});