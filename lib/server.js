var jsdom = require("jsdom");
var $ = require('jquery')(jsdom.jsdom().defaultView);

// if ($("body")) {
// 	// alert("123");

// }

//HTTP服务集
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

//404错误服务
function send404(response) {
	response.writeHead(404, {
		'Content-Type': 'text/plain;charset=UTF-8'
	});
	response.write('你确定它存在？');
	response.end();
}

//访问静态文件服务
function sendFile(response, filePath, fileContents) {
	response.writeHead(200, {
		"Content-Type": mime.lookup(path.basename(filePath))
	});
	response.end(fileContents);
}

//静态文件返回服务
function serverStatic(response, cache, absPath) {
	//判定是否在缓存中
	if (cache[absPath]) {
		sendFile(response, absPath, cache[absPath]);
	} else {
		//检查文件是否存于系统中
		fs.exists(absPath, function(exists) {
			if (exists) {
				//若存在读取文件并注入缓存
				fs.readFile(absPath, function(err, data) {
					if (err) {
						send404(response);
					} else {
						//将文件注入到缓存中
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			} else {
				send404(response);
			}
		});
	}
}

//创建HTTP服务
var server = http.createServer(function(request, response) {
	var filePath = false;
	if (request.url == '/') {
		filePath = "app/index.html";
	} else {
		filePath = 'app' + request.url;
	}

	var absPath = './' + filePath;
	serverStatic(response, cache, absPath);
});

//监听接口访问服务
server.listen(3000, function() {
	console.info("服务启动....")
});