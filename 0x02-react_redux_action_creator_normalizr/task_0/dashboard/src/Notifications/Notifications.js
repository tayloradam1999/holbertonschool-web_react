import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite'
import AppContext from '../App/AppContext'
import close_icon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem'
import NotificationItemShape from './NotificationItemShape'
import propTypes from 'prop-types'


class Notification extends PureComponent {
	render() {
		// assign props to local variables
		const { 
			listNotifications,
			displayDrawer,
			handleDisplayDrawer,
			handleHideDrawer,
			markNotificationAsRead
		} = this.props;

		return (
			<React.Fragment>
				<div className={css(notificationStyles.pDiv)}>
					<p 
						className={css(animationStyle.animation)}
						id="notiP"
						onClick={handleDisplayDrawer}
					>
					Your notifications</p>
				</div>
				{displayDrawer && (
					<div className={css(notificationStyles.notifications)}>
						<button style={{
							position: 'absolute',
							background: 'transparent',
							border: 'none',
							right: '20px',
						}}
							aria-label='close'
							onClick={() => {
								console.log('Close button has been clicked');
							}}>
							<img
								src={close_icon}
								className={css(notificationStyles.x_button)}
								alt="close" height="15px" width="15px"
								onClick={handleHideDrawer}
								id="x_button">
							</img>
						</button>
						<p>Here is the list of notifications</p>
						<ul>
							{/* listNotifications is empty condition */}
							{listNotifications.length === 0 && (
								<li>
									<p>No notification available yet</p>
								</li>
							)}
							{/* render listNotifications */}
							{listNotifications.map(notification => (
								<NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={markNotificationAsRead} id={notification.id} />
							))}
						</ul>
					</div>
				)}
			</React.Fragment>
		)
	}
}

const notificationStyles = StyleSheet.create({
	notifications: {
		'@media (min-width: 350px)': {
			position: 'absolute',
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
			background: 'white',
			fontSize: '20px',
		}
	},

	x_button: {
		'@media (min-width: 350px)': {
			position: 'absolute',
			top: '15px',
			right: '10px',
		}
	},

	pDiv: {
		position: 'absolute',
		top: `0px`,
		right: `15px`,
		backgroundColor: '#fff8f8',
	},
})

const opacityAnimation = {
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
}

const translateYAnimation = {
	'0%': { transform: 'translateY(0px)' },
	'50%': { transform: 'translateY(-10px)' },
}

const animationStyle = StyleSheet.create({
	animation: {
		animationName: [opacityAnimation, translateYAnimation],
		animationDuration: '3s, 1200ms',
		animationIterationCount: '1, 3'
	}
})


Notification.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleDisplayDrawer: () => { },
	handleHideDrawer: () => { },
	markNotificationAsRead: () => { },
}

Notification.propTypes = {
	displayDrawer: propTypes.bool,
	listNotifications: propTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: propTypes.func,
	handleHideDrawer: propTypes.func,
	markNotificationAsRead: propTypes.func,
}

export default Notification