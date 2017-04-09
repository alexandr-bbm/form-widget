import { render } from 'react-dom';
import React from 'react';

import FormWidget from 'FormWidget';

module.exports = {
	FormWidget: {
		create (config = {}) {
			if (!config.containerId || !config.affiliateId) {
				console.error(new Error(`CompanyName.FormWidget: Parameters "containerId" and "affiliateId" are \
required. You passed: ${JSON.stringify(config)}.`));
			}

			const containerNode = document.getElementById(config.containerId);

			if (!containerNode) {
				console.error(new Error(`CompanyName.FormWidget: Can\'t find element with id="${config.containerId}". \
Please, check parameter: containerId`));
			}
			render(
				<FormWidget {...{config}} />,
				containerNode,
			);
		}
	}
};