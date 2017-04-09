import React, { Component } from 'react';
import classNames from 'classNames';

import { Icon } from '../Icon';

import s from './index.css';

import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker-cssmodules.css');

export class DateInput extends Component {

	state = {
		startDate: '',
	};

	handleChange = (date) => {
		this.setState({
			startDate: date
		});
		const { onChange } = this.props;
		if (typeof onChange === 'function') {
			onChange(date);
		}
	};

	render () {
		const { iconColor, containerClassName, inputClassName, placeholder, minDate, name } = this.props;
		return (
			<div className={classNames(s['container'], containerClassName)}>
				<DatePicker
					selected={this.state.startDate}
					onChange={this.handleChange}
					dateFormat="DD.MM.YYYY"
					placeholderText={placeholder}
					className={classNames(s['input'], inputClassName)}
					{...{minDate, name}}
					readOnly
				/>
				<Icon
					name="calendar"
					className={s['icon']}
					style={{ color: iconColor }}
				/>
			</div>
		)
	}
}