import { Component, h } from 'preact';
import classNames from 'classNames';
import Pikaday from 'pikaday';
import '!style-loader!css-loader!pikaday/css/pikaday.css';

import { formatDate } from 'utils/formatDate';
import { Icon } from '../Icon';

import s from './index.css';

export class DateInput extends Component {

	state = {
		value: '',
	};

	componentDidMount() {
		this.picker = new Pikaday({
			field: this.input,
			onSelect: this.handleChange,
		});
	}

	componentWillUnmount() {
		this.picker.destroy();
	}

	handleChange = jsDate => {
		const formattedDate = formatDate(jsDate);
		const { onChange } = this.props;

		this.setState({ value: formattedDate });
		if (typeof onChange === 'function') {
			onChange(formattedDate);
		}
	};

	render () {
		const { iconColor, containerClassName, inputClassName, placeholder, name } = this.props;
		return (
			<div className={classNames(s['container'], containerClassName)}>
				<input
					className={classNames(s['input'], inputClassName)}
					ref={c => this.input = c}
					value={this.state.value}
					type="text"
					readOnly
					{...{placeholder, name}}
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