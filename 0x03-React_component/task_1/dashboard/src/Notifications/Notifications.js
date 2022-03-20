import React from 'react'
import close_icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'
import NotificationItemShape from './NotificationItemShape'
import propTypes from 'prop-types'

import './Notifications.css'

const Notification = ({ displayDrawer, listNotifications }) => {
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
							<NotificationItem key={notification.id} html={notification.html} type={notification.type} value={notification.value} />
						))}
					</ul>
				</div>
			)}
		</>
	)
}


Notification.defaultProps = {
	displayDrawer: false
}

Notification.propTypes = {
	displayDrawer: propTypes.bool
}

export default Notification