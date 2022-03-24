import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow'
import CourseShape from './CourseShape'
import propTypes from 'prop-types'


const CourseList = ({ listCourses }) => {
	return (
		<table id="CourseList" className={css(courseStyles.table)}>
			<thead>
				<CourseListRow isHeader={true} textFirstCell="Available Courses" />
				<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
			</thead>
			<tbody id="CourseBody">
				{/* check if listCourses is empty */}
				{listCourses.length === 0 && (
					<tr>
						<td>No course available yet</td>
					</tr>
				)}
				{/* render listCourses */}
				{listCourses.map(course => (
					<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
				))}
			</tbody>
		</table>
	)
}


const courseStyles = StyleSheet.create({
	table: {
		display: 'table',
		border: '1px solid',
		borderCollapse: 'collapse',
		margin: '2rem auto 0 auto',
		width: '90%',
	}
});


CourseList.defaultProps = {
	listCourses: []
}

CourseList.propTypes = {
	listCourses: propTypes.array
}


export default CourseList