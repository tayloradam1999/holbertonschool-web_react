import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { AppProvider } from './AppContext'
import Notifications from '../Notifications/Notifications'
import { getLatestNotification } from '../utils/utils'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList/CourseList'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayDrawer: false,
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			},
			logOut: this.logOut,
			listNotifications: [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
				{ id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
			]
		}
	};


	componentDidMount() {
		window.addEventListener('keydown', this.keyDownHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.keyDownHandler);
	}

	keyDownHandler = (e) => {
		if (e.keyCode === 72 && e.ctrlKey) {
			alert('Logging you out');
			this.state.logOut();
		}
	}

	handleDisplayDrawer = () => {
		this.setState({ displayDrawer: true })
	}

	handleHideDrawer = () => {
		this.setState({ displayDrawer: false })
	}

	logIn = (email, password) => {
		this.setState({
			user: {
				email,
				password,
				isLoggedIn: true
			}
		})
	}

	logOut = () => {
		this.setState({
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			}
		})
	}

	markNotificationAsRead = (id) => {
		// removes the notification from the array
		const listNotifications = this.state.listNotifications.filter(notification => notification.id !== id);
		this.setState({ listNotifications });
	}

	render() {
		const {
			displayDrawer,
			listNotifications
		} = this.state;

		const listCourses = [
			{ id: 1, name: 'ES6', credit: '60' },
			{ id: 2, name: 'Webpack', credit: '20' },
			{ id: 3, name: 'React', credit: '40' }
		]

		return (
			<AppProvider value={{
				displayDrawer: displayDrawer,
				handleDisplayDrawer: this.handleDisplayDrawer,
				handleHideDrawer: this.handleHideDrawer,
				user: this.state.user,
				logIn: this.logIn,
				logOut: this.logOut
			}}>
				<div className={css(bodyStyles.App)}>
					<Notifications
						listNotifications={listNotifications}
						displayDrawer={displayDrawer}
						handleDisplayDrawer={this.handleDisplayDrawer}
						handleHideDrawer={this.handleHideDrawer}
						markNotificationAsRead={this.markNotificationAsRead}
					/>
					<Header />
					<div className="App-body">
						{this.state.user.isLoggedIn
							?
							<BodySectionWithMarginBottom title="Course list">
								<CourseList listCourses={listCourses} />
							</BodySectionWithMarginBottom>
							:
							<BodySectionWithMarginBottom title="Login in to continue">
								<Login logIn={this.logIn} />
							</BodySectionWithMarginBottom>
						}
						<BodySection title="News from the School"><p>Random text here!</p></BodySection>
					</div>
					<div className={css(footerStyles.Footer)}>
						<Footer />
					</div>
				</div>
			</AppProvider>
		)
	}
}


const primaryColor = '#E11D3F';

const bodyStyles = StyleSheet.create({
	App: {
		backgroundColor: '#ffffff',
		display: 'flex',
		flexDirection: 'column',
	}
});

const footerStyles = StyleSheet.create({
	Footer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		borderTop: `3px solid ${primaryColor}`,
		padding: '1rem',
		fontStyle: 'italic',
	}
});


export default App