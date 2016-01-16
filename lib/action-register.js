var express = require('express');
var routes = require('./routes/routes');
var bodyParser = require('body-parser');
var app = express();

var path = require("path");
/*
 *
 *	APP配置
 *
 */
// app.use(express.favicon());	//默认的favicon
// app.use(logger("dev"));		//区分颜色的Logger

app.use(bodyParser.json());	//解析请求主体
app.use(bodyParser.urlencoded({ extended: false })); //POST请求参数使用

/*
 *	Action注册器
 *	保存添加功能等
 *	待进一步完善体系
 */
var ActionRegister = {
	/*
	 *	添加新GetAction
	 *	提取相关公共部分
	 *	待进一步完善体系
	 */
	addGetAc: function(actionName, actionFn) {
		this._addAc("get", actionName, actionFn);
	},

	/*
	 *	添加新PostAction
	 *	提取相关公共部分
	 *	待进一步完善体系
	 */
	addPostAc: function(actionName, actionFn) {
		this._addAc("post", actionName, actionFn);
	},

	/*
	 *	私有添加Action监听方法
	 *
	 */
	_addAc: function(type, actionName, actionFn) {
		app[type]("/" + routes[actionName], function(req, res) {
			res.json(200, actionFn(req));
		});
	}
}

//设置静态文件集--设置默认请求的主页
app.use(express.static('./app'));
app.all("/", function(req, res) {
	res.sendfile(path.resolve('./app/index.html'));
});

app.listen(8080);

module.exports = ActionRegister;