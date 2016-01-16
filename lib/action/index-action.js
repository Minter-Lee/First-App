//引入Action注册器
var AcReg = require('../action-register');
var IndexSev = require('../service/index-sev');

var IndexAction = function() {

	AcReg.addGetAc("getHelloWorld", function(req) {
		var queryObj = req.query;
		var result = IndexSev.getHelloWorld(queryObj.isNew);
		return result;
	});

	AcReg.addGetAc("getYourName", function(req) {
		var result = IndexSev.getYourName();
		return result;
	});
}

module.exports = IndexAction;