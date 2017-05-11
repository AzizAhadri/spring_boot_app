angular.module("app").config(function($stateProvider){
	$stateProvider.state("adminState.listUserState",{
		url:"/list",
		templateUrl:"/ressources/prez/admin/list_users/list_users.html",
		controller:"listUsersController",
		resolve :{
			userService:function(UserService){
				return UserService;
			}
		}
	})
});