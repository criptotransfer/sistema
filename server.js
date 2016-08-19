// server.js
//
// This is the backend server startup app.
//
// Created by Dax Faulstich Diniz Reis (@daxfdr) on july 29, 2016. 
// Updated by Dax Faulstich Diniz Reis (@daxfdr) on august 9, 2016.

//Adding dependencies
var express = require('express');
//var mongojs = require('mongojs');
var bodyParser = require('body-parser');

//Instancing Express framework and MongoDB library
var app = express();
//var db = mongojs('criptotransfer', ['']);

//Point to Express framework to handle HTML partials
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//Below are the transactions supported by this server.
app.get('/ctRequestMyHistory', function (req, res){
	//
	//Sample code to query database.
	//
	//db.ctTransactions.find(function (err, docs){
	//	res.json(docs);
	//});
	//
	console.log("Activating /ctRequestMyHistory route on CriptoTransfer System service.");
});

app.post('/ctSendNewOrder', function (req, res){
	//
	//Sample code to insert item in database table (collection).
	//
	//db.ctTransactions.insert(req.body, function (err, doc) {
	//	res.json(doc);
	//});
	//
	console.log("Activating /ctSendNewOrder route on CriptoTransfer System service.");
});

//
// Sample code to retrieve data for a specific transaction on local database (collection).
//
// app.get('/getTransaction/:id', function (req, res) {
// 	var id = req.params.id;
// 	db.ctTransactions.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
// 		res.json(doc);
// 	});
// });
//

//Create backend server instance using and available TCP port.
app.listen(3000);
console.log("CriptoTransfer System running on port 3000");