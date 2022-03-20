import React from 'react'
import propTypes from 'prop-types'


const NotificationItem = ({ type, value, html, markAsRead, id }) => {
	// props:
	// - type: string, required, default: 'default'
	// - value: string
	// - html: object with key '__html' and value: string
	if ((type && value) && (typeof type === 'string' && typeof value === 'string') && (!html)) return(<li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>)
	if ((!type) && (html) && (html.__html)) return(<li data-notification-type="default" dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>)
	if ((type) && (html) && (html.__html)) return(<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>)
	return(<li data-notification-type="default" onClick={markAsRead(id)}>NotificationItem: invalid props</li>)
}


NotificationItem.propTypes = {
	type: propTypes.string,
	value: propTypes.string,
	html: propTypes.shape({
		__html: propTypes.string,
	}),
	markAsRead: propTypes.func,
	id: propTypes.number,
}

NotificationItem.defaultProps = {
	type: 'default',
	markAsRead: () => {},
	id: 0,
}

export default NotificationItem