angular.module("app").controller("userDetailsController",function(userService,$scope,$stateParams){
	userService.getUser($stateParams.id,function(user){
		$scope.user = user;
	});
	
});