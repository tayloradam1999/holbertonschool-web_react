import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'


const CourseList = ({ }) => {
	return (
		<table id="CourseList">
			<thead>
				<CourseListRow isHeader={true} textFirstCell="Available Courses" />
				<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
			</thead>
			<tbody id="CourseBody">
				<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
				<CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
				<CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />
			</tbody>
		</table>
	)
}


export default CourseList