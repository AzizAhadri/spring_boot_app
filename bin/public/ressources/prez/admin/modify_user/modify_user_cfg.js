angular.module("app").config(function($stateProvider){
	$stateProvider.state("adminState.modifyState",{
		url:"/admin/user/modify/:id",
		templateUrl:"/ressources/prez/admin/modify_user/modify_user.html",
		controller:"modifyUserController",
		resolve:{
			userService:function(UserService){
				return UserService;
			}
		}
	});
});