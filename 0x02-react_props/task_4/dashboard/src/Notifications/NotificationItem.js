import React from 'react'
import propTypes from 'prop-types'


const NotificationItem = ({ type, value, html }) => {
	// props:
	// - type: string, required, default: 'default'
	// - value: string
	// - html: object with key '__html' and value: string
	if ((type && value) && (typeof type === 'string' && typeof value === 'string') && (!html)) return(<li data-notification-type={type}>{value}</li>)
	if ((!type) && (html) && (html.__html)) return(<li data-notification-type="default" dangerouslySetInnerHTML={html}></li>)
	if ((type) && (html) && (html.__html)) return(<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>)
	return(<li data-notification-type="default">NotificationItem: invalid props</li>)
}


NotificationItem.propTypes = {
	type: propTypes.string,
	value: propTypes.string,
	html: propTypes.shape({
		__html: propTypes.string,
	})
}

export default NotificationItem