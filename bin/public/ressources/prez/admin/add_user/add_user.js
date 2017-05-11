angular.module("app").controller("addUserCtrl",function($scope,$rootScope,users){
	$scope.addUser = function(){
		var user = {
				nom:this.nom,
				prenom:this.prenom,
				email:this.email
			};
		users.addUser(user,function(dataUser){
			alert("user with id :["+dataUser.id+"] added successfully !");
		});
	}
});