var webpack = require('webpack');
module.exports = {
	entry:{
		app:'./resources/js/app.js'
	},
	output:{
		filename:"[name].bundle.js",
		chunkFilename:"[id].chunk.js",
		path:__dirname + "./public/dist"
	},
	plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: "commons.js",
            name: "commons"
        })
    ],
    resolve:{
    	 // Add '.ts' and '.tsx' as resolvable extensions.
         extensions: [".ts",".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }

}