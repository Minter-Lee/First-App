var webpack = require('webpack');

/**==--插件定义--Start==**/

//设定公共JS提取器--自动提取公共部分JS
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('./app/scripts/common.js');

/**==--插件定义--End==**/

module.exports = {
	//插件集
	plugins: [commonsPlugin],
	//页面入口文件
	entry: {
		index: './app/scripts/index.js'
	},
	//入口文件输出配置
	output: {
		// path: 'dist/js/page',
		// filename: '[name].js'
		filename: './app/scripts/bundle.js'
	},
	module: {
		preloaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'jshint-loader' //js检查
		}],

		//加载器配置
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader' //CSS注入和语法
		}, {
			test: /\.js$/,
			loader: 'jsx-loader?harmony' //js文件使用jsx处理--react使用？
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192' //图片文件小于8K，直接转码base64
		}, {
			test: /\.html$/,
			loader: 'html-loader'	//将html转为String
		}]
	}
}