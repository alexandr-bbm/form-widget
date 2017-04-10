module.exports = {
	plugins: {
		'postcss-cssnext': {
			browsers: ['last 2 versions', 'ie >= 10', 'Opera 15'],
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