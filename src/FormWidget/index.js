import { Component, h } from 'preact';
import classNames from 'classNames';

import { DatePicker } from './components/DatePicker';

//require('cq-prolyfill')(); // fixme не работает с css модулями
require('cq-prolyfill')({ postcss: true });

import s from './index.css';

const defaultColors = {
	background: '#4990E2',
	button: '#F4A43E',
	text: '#FFF',
};

class FormWidget extends Component {

	render(props) {
		const { colors } = this.context;
		return (
			<form
				className={s['block']}
				style={{ background: colors.background}}
				onSubmit={this.handleFormSubmit}
			>
				<div className={s['heading']} style={{ color: colors.text }}>
					Where does it come from? Why&nbsp;do&nbsp;we&nbsp;use&nbsp;it?
				</div>
				<div className={s['row']}>
					<div className={classNames(s['col'], s['col_description'])}>
						<div className={s['description']} style={{ color: colors.text}}>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout
						</div>
					</div>
					<div className={classNames(s['col'], s['col_departDate'])}>
						<DatePicker placeholder="Depart date"/>
					</div>
					<div className={classNames(s['col'], s['col_returnDate'])}>
						<DatePicker placeholder="Return date"/>
					</div>
					<div className={classNames(s['col'], s['col_submit'])}>
						<button className={s['button']} style={{ background: colors.button, color: colors.text }}>
							search
						</button>
					</div>
				</div>
			</form>
		)
	}

	handleFormSubmit = (e) => {
		e.preventDefault();
	}
}

export default class FormWidgetWithContext extends Component {

	getChildContext () {
		if (!this.props.config.affiliateId) {
			throw new Error('')
		}
		return {
			colors: {
				...defaultColors,
				...this.props.config && this.props.config.customColors,
			},
			affiliateId: this.props.config.affiliateId
		};
	}

	render (props) {
		return <FormWidget {...props} />
	}
}