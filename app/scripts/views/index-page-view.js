/*-==组件加载==-*/
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var IndexPageView = Backbone.View.extend({
	template: _.template(require('../tmpls/index-page.html')),
	render: function() {
		this.$el.html(this.template({}));
		return this;
	}
});

module.exports = IndexPageView;