angular.module("app")
  .controller('Confirm', function($scope, $state, myService) {
  	$scope.information = myService.getInformation();
    
    var checking = function() {
      if ($scope.information.firstName === "") {
        $state.go("input");
      }
    }
    checking();
  });
