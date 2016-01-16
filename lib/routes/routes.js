/**
	系统路由注册表
**/
var reqSuffix = ".action";

var Routes = {
	//Get
	getHelloWorld: "getHelloWorld" + reqSuffix,
	getYourName: "getYourName" + reqSuffix,
	
	//Post
	saveHelloWorld: "saveHelloWorld" + reqSuffix
}

module.exports = Routes;