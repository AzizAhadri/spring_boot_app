angular.module("app").factory("UserService",function($rootScope,$http){
	var service = {};

	User.prototype.id = 0;
	service.getUsers = function(action){
		users = {};
		$http.get("http://localhost:8080/admin/user/list")
							.then(function(result){
								action(result.data);
							});
		return users.data;
	}

	service.addUser = function(user,action){
		var response = $http.post("http://localhost:8080/admin/user/create",user)
								.then(function(result){
									action(result.data);
								});
	}

	service.create= function(nom,prenom,email){
		var user = new User(nom,prenom,email);
		return user;
	}

	service.delete = function(id,action){
		var user = $http.delete("http://localhost:8080/admin/user/"+id)
							.then(function(result){
									action(result.data);
								});
	}

	service.getUser = function(id,action){
		console.log("getting a user");
		var user = $http.get("http://localhost:8080/admin/user/"+id)
							.then(function(result){
									action(result.data);
								});
		return user;
	}

	service.modifyUser = function(user,action){
		var user = $http.put("http://localhost:8080/admin/user/"+user.id,user)
							.then(function(result){
									action(result.data);
								});
	}

	return service;

});

function User(nom,prenom,email){
	this.nom = nom;
	this.prenom = prenom;
	this.email = email;
	this.id = User.prototype.id;
	User.prototype.id ++;
}
