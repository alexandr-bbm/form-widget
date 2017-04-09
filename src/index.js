import { render, h } from 'preact';

import FormWidget from 'FormWidget';

module.exports = {
	FormWidget: {
		create (config = {}) {
			if (!config.containerId) {
				console.log(new Error(`CompanyName.FormWidget: Parameter containerId is \
				 required. You passed: ${config.containerId}.`));
			}

			const conatinerNode = document.getElementById(config.containerId);

			if (!conatinerNode) {
				console.log(new Error(`CompanyName.FormWidget: Can\'t find element with id ${config.containerId}. \
					Please, check parameter: containerId`));
			}
			render(
				<FormWidget {...{config}} />,
				conatinerNode,
			);
		}
	}
};