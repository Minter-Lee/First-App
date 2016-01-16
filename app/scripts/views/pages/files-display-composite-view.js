var Backbone = require('backbone');
var CompositeView = require('mn').CompositeView;
var FileItem = require('../pages/file-item-view');
var Uploader = require('moxie-plupload');

module.exports = CompositeView.extend({
	template: require('../../tmpls/pages/files-display.html'),
	childView: FileItem,
	childViewContainer: '.folder',
	ui: {
		selectFile: '.single-btn'
	},
	events: function(){
		var events = {}

		events['click ' + this.ui.selectFile] = 'selectFile';

		return events;
	},
	initialize: function(){
		this.collection = new Backbone.Collection();
		//console.log(this.model.attributes);
	},
    onShow: function(){
    	this.uploader = new plupload.Uploader({
    		browse_button: 'pickfiles',
			url:'/' ,// 服务器端的上传页面地址
			max_file_size : '10mb',  //上传文件大小限制
			reseize: {      //设置图片大小
				width:60,
				height:50,
			},
			//可以上传的文件格式
			filters: [
				{title: "Image files", extensions: "jpg,gif,png"},
				{title: "Zip files", extensions: "zip, avi, rar"}
			],
			//rename
			rename: true,
			//drag drop
			dragdrop: true
		});

    	this.uploader.init();
    }

	// selectFile: function(){
	// 	//实例化一个plupload上传对象
	// 	var uploader = new plupload.Uploader({
	// 		browse_button:'pickfiles', 
	// 		url:'/' ,// 服务器端的上传页面地址
	// 		max_file_size : '10mb',  //上传文件大小限制
	// 		reseize: {      //设置图片大小
	// 			width:60,
	// 			height:50,
	// 		},
	// 		//可以上传的文件格式
	// 		filters: [
	// 			{title: "Image files", extensions: "jpg,gif,png"},
	// 			{title: "Zip files", extensions: "zip, avi, rar"}
	// 		],
	// 		//rename
	// 		rename: true,
	// 		//drag drop
	// 		dragdrop: true,
	// 		//缩略图
	// 		views: {
	// 			list:true,
	// 			thumbs: true,
	// 			active: 'thumbs'
	// 		}
	// 	});

	// 	//在实例对象上调用init()方法进行初始化
	// 	uploader.init();

	// 	//绑定各种事件，在容器中显示待上传文件的列表
	// 	uploader.bind('FilesAdded', function(uploader, files){
	// 		var str = '';
	// 		for(var i = 0; i < files.length; i++){
	// 			var file_name = files[i].name;  //文件名
	// 			//更新ui
	// 			str = '<li id="file-'+files[i].id+'" class="file-item"><span class="file-name">'+file_name+'</span></li>';
	// 		}
	// 		$('.files-list').append(str);
	// 	});

	// 	//文件上传的进度
	// 	//uploader.bind('UploadProgress', function(uploader, file){
	// 	//$(file.id).text() = '' + file.percent + '%';
	// 	//});
	// 	this.trigger('uploadDone');
	// }

})