angular.module("app").config(function($stateProvider,$urlServiceProvider){
	$stateProvider.state("adminState",{
		url:"/admin",
		templateUrl:"/ressources/prez/admin/admin.html"
	});
});