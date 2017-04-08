import { Component, h} from 'preact';
import classNames from 'classNames';

import { DatePicker } from './components/DatePicker';

//require('cq-prolyfill')(); // fixme не работает с css модулями

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
				<div className={s['heading']} style={{ color: colors.text}}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				</div>
				<div className={s['row']}>
					<div className={classNames(s['col'], s['col_description'])}>
						<div className={s['description']} style={{ color: colors.text}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
						</div>
					</div>
					<div className={classNames(s['col'], s['col_departDate'])}>
						<DatePicker inputClassName={s['input']} placeholder="Depart date"/>
					</div>
					<div className={classNames(s['col'], s['col_returnDate'])}>
						<DatePicker inputClassName={s['input']} placeholder="Return date"/>
					</div>
					<div className={classNames(s['col'], s['col_submit'])}>
						<button className={s['button']} style={{ background: colors.button}}>
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
		return {
			colors: {
				...defaultColors,
				...this.props.customColors,
			}
		};
	}

	render (props) {
		return <FormWidget {...props} />
	}
}