angular.module("app")
  .controller('Input', function($scope, $state, myService) {
    
  	$scope.firstName;
  	$scope.lastName;
  	$scope.email;

    $scope.callToAdd = function(first, second, email) {
    	myService.setInformation(first, second, email);
        $state.go("confirm");
    }    

  });