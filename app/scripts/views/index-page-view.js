/*-==组件加载==-*/
var _ = require('_');
var Uploader = require('moxie-plupload');
var Backbone = require('backbone');
var LayoutView = require('mn').LayoutView;
var FilesCompView = require('./pages/files-display-composite-view');

var IndexPageView = LayoutView.extend({
	template: require('../tmpls/index-page.html'),
	regions: {
		folder: '.upload-container'
	},
	initialize: function(){
		this.model = new Backbone.Model;
		this.filesCompView = new FilesCompView();
	},
	onRender: function(){
		this.showFolderView();
	},
	//图片缩略图show
	showFolderView: function(){
		this.folder.show(this.filesCompView);
	}
	
});

module.exports = IndexPageView;