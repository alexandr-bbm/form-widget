import { render, h } from 'preact';

import FormWidget from 'FormWidget';

module.exports = {
	FormWidget: {
		create (config) {
			render(<FormWidget customColors={config.customColors} />, document.querySelector(config.selector));
		}
	}
};