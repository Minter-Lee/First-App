/*-==组件加载==-*/
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var IndexPageView = Backbone.View.extend({
	template: _.template(require('../tmpls/index-page.html')),
	render: function() {
		this.showHelloWord();
		this.$el.html(this.template({}));
		return this;
	},

	showHelloWord: function() {
		var self = this;
		this.model = new Backbone.Model();
		this.model.url = WEB_URL + "getHelloWorld.action";
		this.model.fetch({
			data: {
				isNew: false
			}
		}).done(function(resp) {
			self.$el.find(".indexPage").text(resp.msg);

			self.model.url = WEB_URL + "saveHelloWorld.action";
			self.model.save({
				msg: "HelloWorld"
			}).done(function(resp) {
				alert(resp.msg);
			});
		});
	}
});

module.exports = IndexPageView;