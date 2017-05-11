angular.module("app").config(function($stateProvider){

		$stateProvider.state("adminState.addUserState",{
			url:"/admin/users",
			templateUrl:"/ressources/prez/admin/add_user/add_user.html",
			controller:"addUserCtrl",
			resolve:{
				users : function(UserService){
					return UserService;
				}
			}
		});

});