angular.module("app").controller("authController",function($scope,$state,AuthService){
	$scope.cred = {};
	$scope.auth = function(){
		AuthService.auth($scope.cred,function(response){
			console.log(response.data);
			if(response.data != null){
				response.data.authorities.filter(function(entry,index){
					if(entry.authority === "ROLE_ADMIN"){
						$state.go("adminState");
					}
				});
				response.data.authorities.filter(function(entry,index){
					if(entry.authority === "ROLE_SIMPLE_USER"){
						$state.go("userState");
					}
				});
			}
		});
	}
});