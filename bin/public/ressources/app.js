var app = angular.module("app",["ui.router"]);

angular.module("app").config(function($stateProvider,$urlServiceProvider){
	$urlServiceProvider.rules.otherwise({ state: 'authState' });
});


app.config(function($httpProvider){
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});



