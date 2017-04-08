import { Component, h } from 'preact';
import classNames from 'classNames';

require('cq-prolyfill')();

import s from './styles.css';

export class FormWidget extends Component {

	render(props) {
		return (
			<form className={s['block']} onSubmit={this.handleFormSubmit}>
				<div className={s['heading']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
				<div className={s['row']}>
					<div className={classNames(s['col'], s['col_description'])}>
						<div className={s['description']}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
						</div>
					</div>
					<div className={classNames(s['col'], s['col_departDate'])}>
						<input className={s['input']} type="date" placeholder="Depart date"/>
					</div>
					<div className={classNames(s['col'], s['col_returnDate'])}>
						<input className={s['input']} type="date" placeholder="Return date"/>
					</div>
					<div className={classNames(s['col'], s['col_submit'])}>
						<button className={s['button']}>search</button>
					</div>
				</div>
			</form>
		)
	}

	handleFormSubmit = (e) => {
		e.preventDefault();
	}
}