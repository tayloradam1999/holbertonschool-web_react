import propTypes from 'prop-types';

const CourseShape = propTypes.shape({
	  id: propTypes.number.isRequired,
	  name: propTypes.string.isRequired,
	  credits: propTypes.number.isRequired,
})


export default CourseShape;