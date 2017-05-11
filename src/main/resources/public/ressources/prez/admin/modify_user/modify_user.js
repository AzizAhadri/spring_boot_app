angular.module("app").controller("modifyUserController",function($scope,$stateParams,userService){
	userService.getUser($stateParams.id,function(user){
		$scope.userToModify =user;
	});
	$scope.modifyUser = function(){
		userService.modifyUser($scope.userToModify,function(data){
			alert("User modified successfully !");
		});
	}
});