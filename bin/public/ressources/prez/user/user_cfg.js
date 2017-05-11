angular.module("app").config(function($stateProvider){
	$stateProvider.state("userState",{
		url:"/user",
		templateUrl:"/ressources/prez/user/user.html"
	});
});