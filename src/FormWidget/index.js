import React, { Component, PropTypes } from 'react';
import classNames from 'classNames';
require('cq-prolyfill')({ postcss: true });

import { DateInput } from './components/DateInput';
import { Button } from './components/Button';

import s from './index.css';

const defaultColors = {
	background: '#4990E2',
	button: '#F4A43E',
	text: '#FFF',
};

export default class FormWidget extends Component {

	state = {
		departureDate: '',
	};

	constructor(props) {
		super(props);
		this.config = {
			colors: {
				...defaultColors,
				...props.config && props.config.customColors,
			},
			affiliateId: props.config.affiliateId
		};
	}

	render() {
		const { colors } = this.config;
		return (
			<form
				className={s['block']}
				style={{ background: colors.background }}
				onSubmit={this.handleFormSubmit}
			>
				<div className={s['heading']} style={{ color: colors.text }}>
					Where does it come from? Why&nbsp;do&nbsp;we&nbsp;use&nbsp;it?
				</div>
				<div className={s['row']}>
					<div className={classNames(s['col'], s['col_description'])}>
						<div className={s['description']} style={{ color: colors.text }}>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout
						</div>
					</div>
					<div className={classNames(s['col'], s['col_departDate'])}>
						<DateInput
							placeholder="Depart date"
							iconColor={colors.background}
							onChange={this.handleDepartureDateChange}
							name="departDate"
						/>
					</div>
					<div className={classNames(s['col'], s['col_returnDate'])}>
						<DateInput
							placeholder="Return date"
							iconColor={colors.background}
							minDate={this.state.minReturnDate}
							name="returnDate"
						/>
					</div>
					<div className={classNames(s['col'], s['col_submit'])}>
						<Button colors={colors} />
					</div>
				</div>
			</form>
		)
	}

	handleDepartureDateChange = date => this.setState({ minReturnDate: date });

	handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.elements['departDate'].value);
		console.log(e.target.elements['returnDate'].value);
	}
}