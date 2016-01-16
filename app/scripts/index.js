/*-==组件加载==-*/

require('styles/index.css');
var Backbone = require('backbone');
var Application = require('mn').Application;

var IndexPageView = require('./views/index-page-view');

function mainJs(){
	var app = new Application();
    
	app.addRegions({
		el: 'body',
		container : '#container'
	});

	app.addInitializer(function(){
		this.container.show(new IndexPageView());
	});

	app.start();
}

$(mainJs);
