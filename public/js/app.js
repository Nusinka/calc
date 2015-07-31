angular.module('calcApp', []).controller('calcCtrl', function ($scope) {
    $scope.output = 0;
    $scope.newNum = true;
    $scope.curVal = null;
    $scope.curOperation = null;
    $scope.total = null;

    $scope.addDigit = function (num) {
        if (!$scope.curOperation) {
            $scope.total = null;
        }
        if ($scope.output == 0 || $scope.newNum) {
            $scope.output = num;
            $scope.newNum = false;
        } else {
            $scope.output += String(num);
        }
        $scope.curVal = Number($scope.output);
    };

    $scope.action = function (act) {
        if ($scope.total && $scope.curVal) {
            $scope.calculate();
        }
        if (!$scope.total) {
            $scope.total = $scope.curVal;
        }
        $scope.curOperation = act;
        $scope.curVal = null;
        $scope.newNum = true;
    };

    $scope.calculate = function () {
        if ($scope.curOperation == 'add') {
            $scope.total += $scope.curVal;
        } else if ($scope.curOperation == 'subtract') {
            $scope.total -= $scope.curVal;
        } else if ($scope.curOperation == 'multiply') {
            $scope.total = $scope.total * $scope.curVal;
        } else if ($scope.curOperation == 'split') {
            $scope.total = $scope.total / $scope.curVal;
        }
        $scope.output = $scope.total;
        $scope.newNum = true;
        $scope.curOperation = null;
        $scope.curVal = null;
    };

    $scope.clear = function () {
        $scope.output = 0;
        $scope.newNum = true;
        $scope.curOperation = null;
        $scope.curVal = null;
        $scope.total = null;
    };
});