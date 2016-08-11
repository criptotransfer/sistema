// CriptoTransfer Transaction Service - ctTransactionService (ctTransactionService.js)
//
// Angular.JS Service to handle transactions.
//
// Created by Dax Faulstich Diniz Reis (@daxfdr) on august 9, 2016. 
// Updated by Dax Faulstich Diniz Reis (@daxfdr) on august 10, 2016.

app.factory('$ctTransactionService', ['$http','$rootScope', function($http,$rootScope) {
	
	var f = {};

	f.requestMyHistory = function(){
		$http.get('/ctRequestMyHistory').success(function (response){$rootScope.$broadcast('eventRequestMyHistory', response)});
	}

	return f;

}]);