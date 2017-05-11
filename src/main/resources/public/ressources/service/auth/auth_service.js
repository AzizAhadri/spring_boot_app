angular.module("app").factory("AuthService",function($http){
	var service = {};
	service.auth = function(cred,action){
		$http({
			url:"http://localhost:8080/auth",
			method:"get",
			headers:{
				authorization:"Basic " +btoa(cred.username+":"+cred.password)
			}
		}).then(function(result){
				action(result)
		});
	}
	return service;
});