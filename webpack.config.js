const path = require( 'path' )

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'main.bundle.js',
	},
}