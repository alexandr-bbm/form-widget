module.exports = {
	plugins: {
		'postcss-import': {
			path: ['src/']
		},
		'postcss-cssnext': {
			browsers: ['last 2 versions', 'ie >= 9', 'Opera 12'],
		},
		'postcss-autoreset': {
			reset: {
				margin: 0,
				padding: 0,
				borderRadius: 0
			}
		},
		'cq-prolyfill/postcss-plugin': {},
	},
};