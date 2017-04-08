import { render, h } from 'preact';

import { FormWidget } from 'FormWidget';

module.exports = {
	FormWidget: {
		create (config) {
			render(<FormWidget {...config} />, document.querySelector(config.selector));
		}
	}
};