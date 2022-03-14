import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<Notifications />
					<Header />
					<div className="App-body">
						<Login />
					</div>
					<div className="App-footer">
						<Footer />
					</div>
				</div>
			</React.Fragment>
		)
	}
}