import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList'
import propTypes from 'prop-types'


const App = ({ isLoggedIn }) => {
	return (
		<div className="App">
			<Notifications />
			<Header />
			<div className="App-body">
				{isLoggedIn ? <CourseList /> : <Login />}
			</div>
			<div className="App-footer">
				<Footer />
			</div>
		</div>
	)
}


App.defaultProps = {
	isLoggedIn: false
}

App.propTypes = {
	isLoggedIn: propTypes.bool
}

export default App