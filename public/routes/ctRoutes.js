// CriptoTransfer Angular Routes - ctRoutes (ctRoutes.js)
//
// Angular.JS Controller to handle transactions.
//
// Created by Dax Faulstich Diniz Reis (@daxfdr) on august 15, 2016. 
// Updated by Dax Faulstich Diniz Reis (@daxfdr) on august 17, 2016.
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/Index.html'
	})
	.when('/login', {
		templateUrl: 'views/Login.html'
	})
	.when('/sobre', {
		templateUrl: 'views/Sobre.html'
	})
	.when('/foxbit', {
		templateUrl: 'views/Foxbit.html'
	})
	.when('/comprafacilfoxbit', {
		templateUrl: 'views/CompraFacilFoxBit.html'
	})
	.when('/depositarfoxbit', {
		templateUrl: 'views/DepositarFoxbit.html'
	})
	.when('/bookfoxbit', {
		templateUrl: 'views/BookFoxBit.html'
	})
	.when('/bleutrade', {
		templateUrl: 'views/Bleutrade.html'
	})
	.otherwise({redirectTo: '/'});
}])