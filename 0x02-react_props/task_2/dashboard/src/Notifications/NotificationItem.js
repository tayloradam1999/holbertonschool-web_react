import React from 'react'


const NotificationItem = ({ type, value, html }) => {
	if (value) return(<li data-notification-type={type}>{value}</li>)
	if (html) return(<li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>)
}

export default NotificationItem