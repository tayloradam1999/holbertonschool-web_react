import React from 'react'
import propTypes from 'prop-types'


class NotificationItem extends React.Component {
	render() {
		// props:
		// - type: string, required, default: 'default'
		// - value: string
		// - html: object with key '__html' and value: string
		// - markAsRead: function
		// - id: number
		const { type, value, html, markAsRead, id } = this.props
		return (
			<li onCLick={() => { markAsRead(id) }} 
			data-notification-type={type}
			dangerouslySetInnerHTML={html}
			>
			{value}
			</li>
		)
	}
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

export default NotificationItem = React.memo(NotificationItem)