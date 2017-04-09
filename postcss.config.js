module.exports = {
	plugins: {
		'postcss-import': {
			path: ['src/']
		},
		'postcss-cssnext': {
			browsers: ['last 2 versions', 'ie >= 9', 'Opera 12'],
			features: {
				customMedia: {
					extensions: {
						'--phone': '(width < 440px)',
						'--tablet': '(width >= 440px) and (width < 768px)',
						'--laptop': '(width >= 768px) and (width < 1024px)',
						'--desktop': '(width >= 1024px)'
					},
				}
			}
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