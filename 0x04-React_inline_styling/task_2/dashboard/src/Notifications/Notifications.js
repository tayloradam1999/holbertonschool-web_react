import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import close_icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import NotificationItemShape from './NotificationItemShape'
import propTypes from 'prop-types'

class Notification extends Component {
	// function that logs notification id to console
	markAsRead(id) {
		console.log(`Notification ${id} has been read`);
	}

	// function that makes the file only update when next listNotifications is longer than current
	shouldComponentUpdate(nextProps) {
		return nextProps.listNotifications.length > this.props.listNotifications.length;
	}

	render() {
		// assign props to local variables
		const { listNotifications, displayDrawer } = this.props;

		return (
			<>
				<div className="menuItem">
					<p className={css(notificationStyles.p)}>Your notifications</p>
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
							<img src={close_icon} alt="close" height="15px" width="15px"></img>
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
								<NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} id={notification.id} />
							))}
						</ul>
					</div>
				)}
			</>
		)
	}
}

const primaryColor = '#E11D3F';

const notificationStyles = StyleSheet.create({
	notifications: {
		border: `1 px solid ${primaryColor}`,
		padding: `1rem`
	},

	p: {
		position: 'absolute',
		right: `3rem`
	},
})


Notification.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
}

Notification.propTypes = {
	displayDrawer: propTypes.bool,
	listNotifications: propTypes.arrayOf(NotificationItemShape),
}

export default Notification