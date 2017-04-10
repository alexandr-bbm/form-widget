import { Component, h } from 'preact';

export class Icon extends Component {
	render() {
		const {className, style, name, title } = this.props;
		return (
			<i
				className={className}
				style={style}
				dangerouslySetInnerHTML={{ __html: require(`./icons/${name}.svg`) }}
				title={title}
			/>
		);
	}
}
