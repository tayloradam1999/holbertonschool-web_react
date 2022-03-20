import React, { Component } from 'react';
import propTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';


class BodySectionWithMarginBottom extends Component {
	render() {
		return (
			<div className="bodySectionWithMargin">
				<BodySection {...this.props} />
			</div>
		)
	}
}


BodySectionWithMarginBottom.propTypes = {
	title: propTypes.string.isRequired,
	children: propTypes.oneOfType([
		propTypes.string,
		propTypes.element
	])
}

BodySectionWithMarginBottom.defaultProps = {
	children: <React.Fragment />
}

export default BodySectionWithMarginBottom;