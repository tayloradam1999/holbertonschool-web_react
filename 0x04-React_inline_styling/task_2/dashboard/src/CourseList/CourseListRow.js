import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types'


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	// props:
	// - isHeader: bool, default: false
	// - textFirstCell: string, required
	// - textSecondCell: string, default: null
	const row_background_color = { backgroundColor: '#f5f5f5ab' };
	const header_row_background_color = { backgroundColor: '#deb5b545' };
	let node;
	let style;

	if (isHeader) {
		style = header_row_background_color;
		if (!textSecondCell) {
			node = <th colSpan="2" className={css(rowStyles.th)}>{textFirstCell}</th>;
		} else {
			node =
				<React.Fragment>
					<th className={css(rowStyles.NOTth)}>{textFirstCell}</th>
					<th className={css(rowStyles.NOTth)}>{textSecondCell}</th>
				</React.Fragment>;
		}
	} else {
		style = row_background_color;
		node =
			<React.Fragment>
				<td>{textFirstCell}</td>
				<td>{textSecondCell}</td>
			</React.Fragment>;
	}
	return (
		<tr style={style}>
			{node}
		</tr>
	);
}

const rowStyles = StyleSheet.create({
	th: {
		textAlign: 'center',
		border: `1px solid`,
		paddingBottom: `0.5rem`
	},

	NOTth: {
		textAlign: 'start',
		borderBottom: `1px solid`,
	}
})


CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null
}

CourseListRow.propTypes = {
	isHeader: propTypes.bool,
	textFirstCell: propTypes.string.isRequired,
	textSecondCell: propTypes.oneOfType([
		propTypes.string,
		propTypes.number,
	])
}

export default CourseListRow