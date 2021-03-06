var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename:'main.css'
})
module.exports = {
	entry:{
		app:'./resources/assets/js/app.js'
	},
	output:{
		filename:"[name].bundle.js",
		chunkFilename:"[id].chunk.js",
		path:path.resolve(__dirname , "./public/dist")
	},
	plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: "commons.js",
            name: "commons"
        })
    ],
    resolve:{

    	 // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["*",".ts",".js", ".json",".vue"],
        modules: [path.join(__dirname, 'src'), 'node_modules'],// add a directory search src/* over node_modules/
        alias:{

            //Create aliases to import or require certain modules more easily
            //for example in pageView import components may do like this import componentA from '../**/components/**/*.vue'
            //but use alias you can import like this import componentA  from 'components/**/*.vue'
            // //watch more on https://webpack.js.org/configuration/resolve/
            "@components":path.resolve(__dirname,'./resources/assets/js/components/'),
                     
        }
    },
    module: {
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.scss$/,
                use:extractPlugin.extract({
                    use:['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins:[
        extractPlugin
    ]
    

}