angular.module("app").config(function($stateProvider){
	$stateProvider.state("authState",{
		url:"/auth",
		templateUrl:"/ressources/prez/auth/auth.html",
		controller:"authController"
	})
});