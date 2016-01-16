/*-==组件加载==-*/
var $ = require('jquery');
var Backbone = require('backbone');

var IndexPageView = require('./views/index-page-view');

var AppView = Backbone.View.extend({
	el: '#container',
	render: function() {
		this.loadIndexPageView();
	},
	loadIndexPageView: function() {
		var indexPageView = new IndexPageView();
		this.$el.append(indexPageView.render().$el);
	}
});

function mainJs() {
	var appView = new AppView();
	appView.render();
}
$(mainJs);

/*
 *	全局变量
 */
 WEB_URL = 'http://' + location.host + "/";
