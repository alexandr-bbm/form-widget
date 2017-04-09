import React, { Component } from 'react';
import { shadeColor } from 'utils/shadeColor';

import s from './index.css';

export class Button extends Component {

	state = {
		hover: false,
		active: false,
	};

	constructor(props) {
		super(props);
		this.darkenButtonColor = shadeColor(props.colors.button, -0.15) || '#DB9337';
		this.lightenButtonColor = shadeColor(props.colors.button, 0.15) || '#f1a439';
	}

	componentDidMount() {
		document.addEventListener('mouseup', this.handleMouseUp);
	}

	componentWillUnmount() {
		document.removeEventListener('mouseup', this.handleMouseUp);
	}

	getButtonStyle = (colors) => {
		let background = colors.button;
		if (this.state.hover) {
			background = this.lightenButtonColor;
		}
		if (this.state.active) {
			background = this.darkenButtonColor;
		}
		return {
			background,
			color: colors.text,
			borderBottom: `2px solid ${this.darkenButtonColor}`,
		}
	};

	render () {
		const { colors } = this.props;
		return (
			<button
				className={s['button']}
				style={this.getButtonStyle(colors)}
				onMouseDown={this.handleButtonMouseDown}
				onMouseEnter={this.handleButtonMouseEnter}
				onMouseLeave={this.handleButtonMouseLeave}
			>
				search
			</button>
		)
	}

	handleButtonMouseDown = () => this.setState({ active: true });

	handleMouseUp = () => this.setState({ active: false });

	handleButtonMouseEnter = () => this.setState({ hover: true });

	handleButtonMouseLeave = () => this.setState({ hover: false });
}