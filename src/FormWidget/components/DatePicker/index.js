import { Component, h } from 'preact';
import classNames from 'classNames';

import { Icon } from '../Icon';

import s from './index.css';

export class DatePicker extends Component {

	render (props) {
		const colors = this.context;
		return (
			<div className={classNames(s['container'], props.containerClassName)}>
				<input
					className={classNames(s['input'], props.inputClassName)}
					type="date"
					placeholder={props.placeholder} />
				<Icon
					name="calendar"
					className={s['icon']}
					style={{ color: colors.background }}
				/>
			</div>
		)
	}
}