angular.module("app").controller("navController",function($state){
	this.listUsers = function(){
		$state.go("adminState.listUserState");
	};
	this.addUser = function(){
		$state.go("adminState.addUserState");
	}
});