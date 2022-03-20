import React, { Component } from 'react'
import close_icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import NotificationItemShape from './NotificationItemShape'
import propTypes from 'prop-types'

import './Notifications.css'


class Notification extends Component {
	// function that logs notification id to console
	markAsRead(id) {
		console.log(`Notification ${id} has been read`);
	}

	render() {
		// assign props to local variables
		const { listNotifications, displayDrawer } = this.props;

		return (
			<>
				<div className="menuItem">
					<p>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className="Notifications">
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


Notification.defaultProps = {
	displayDrawer: false
}

Notification.propTypes = {
	displayDrawer: propTypes.bool
}

export default Notification