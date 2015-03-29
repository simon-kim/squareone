'use strict';

angular.module('squareApp')
  .controller('mainCtrl', function ($scope) {
  	$scope.users = [];
  	$scope.user = {};

  	$scope.submit = function () {
  		$scope.users.push({Name: $scope.user.Name});
  		$scope.showOverlay = false;
    };

  	var names = angular.copy($scope.users);

    $scope.formReset = function () {
    	$scope.users = angular.copy(names);
    	$scope.mainForm.$setPristine();
    };

    $scope.change = function () {
    	return !angular.equals($scope.person, names);
    };

    $scope.isInvalid = function(field){
      return $scope.mainForm[field].$invalid && $scope.mainForm[field].$dirty;
    };

    $scope.isValid = function(field){
      return $scope.mainForm[field].$valid && $scope.mainForm[field].$dirty;
    };

    $scope.$watch('mainForm', function(){
      console.log('$scope.mainForm', $scope.mainForm);
    });
  });
