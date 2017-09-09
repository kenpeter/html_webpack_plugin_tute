// output index template ejs to index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

// export components
module.exports = {
	// start at main.js
	entry: './main.js',
	// end at bundle.js
  output: {
		// ./dist/bundle.js 
		path: path.join(__dirname, 'dist'),
  	filename: 'bundle.js',
		publicPath: '/'
  },
	// watch change
	watch: true,
	module: {
		// load js file, css file, other files
  	loaders: [
    	{
				// if see x.js, then we need to do something
				// if we see x.html, do nothing
      	test: /\.js$/,
				// too big, ignore
        exclude: /node_modules/,
				// understand babel
        loader: 'babel-loader',
				// query keyword with es6 to es5
        query: {
        	presets: ['es2015']
        }
      },
			
			{
				// x.css filke
      	test: /\.css$/,
				// each time need to exclude big dir
        exclude: /node_modules/,
				// the op starts at right most, css loader, style loader
        loader: 'style-loader!css-loader'
      }		
    ],
	},
	// extra func	
	plugins: [
		// hot reload
		new webpack.HotModuleReplacementPlugin(),

		// instance 
  	new HtmlWebpackPlugin({
			// template
    	template: 'index.template.ejs',
			// inject into body, not head
    	inject: 'body',
  	})
	]
};
