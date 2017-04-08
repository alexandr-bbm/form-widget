module.exports = {
	plugins: {
		'postcss-import': {
			path: ['src/']
		},
		'postcss-cssnext': {
			browsers: ['last 4 versions', '> 5%'],
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
	},
};