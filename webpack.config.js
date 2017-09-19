var webpack = require('webpack');
module.exports = {
	entry:{
		server:'./server.ts'
	},
	output:{
		filename:"[name].bundle.js",
		chunkFilename:"[id].chunk.js",
		path:__dirname + "./build/"
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