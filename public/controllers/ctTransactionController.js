// CriptoTransfer Transaction Controller - ctTransactionController (ctTransactionController.js)
//
// Angular.JS Controller to handle transactions.
//
// Created by Dax Faulstich Diniz Reis (@daxfdr) on august 9, 2016. 
// Updated by Dax Faulstich Diniz Reis (@daxfdr) on august 10, 2016.


// Controller $questaoController (questaoController.js)
//
// Este controller mantém o cadastro de questões.
//
// Criado por Dax Faulstich Diniz Reis (@daxfdr) em 14/02/2016. 
// Atualizado por --- em ---.

app.controller('ctTransactionController', ['$scope', '$ctTransactionService', function($scope, $ctTransactionService){

	$scope.ctTransactions = [];

	var Refresh = function() {
		$ctTransactionService.requestMyHistory();
		$scope.questao = '';
	};

    $scope.$on('eventRequestMyHistory', function (err,response) {
 		$scope.ctTransactions = response;
 	});

	Refresh();

	$scope.submitBTCPurchaseOrder = function () {
		$ctTransactionService.submitBTCPurchaseOrder($scope.ctTransaction);
		Refresh();
	};

}]);