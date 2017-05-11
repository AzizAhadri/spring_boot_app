angular.module("app").controller("listUsersController",function($scope,$state,userService){
	userService.getUsers(function(data){
		$scope.listUsers = data;
	});
	$scope.delete = function(id){
		userService.delete(id,function(){
			$scope.listUsers.forEach(function(user,index){
				if(user.id === id){
					$scope.listUsers.splice(index,1);
				}
			});
		});
	}
	$scope.modify = function(id){
		$state.go("adminState.modifyState",{id:id});
	}
	$scope.details = function(id){
		$state.go("adminState.listUserState.userDetailState",{id:id});
	}
});