angular.module("app").config(function($stateProvider){
	$stateProvider.state("adminState.listUserState.userDetailState",{
		url:"/details/:id",
		templateUrl:"/ressources/prez/admin/user_details/user_details.html",
		controller:"userDetailsController",
		resolve:{
			userService:function(userService){
				return userService;
			}
		}
	});
});