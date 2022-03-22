import React, { PureComponent } from 'react'
import propTypes from 'prop-types'


class NotificationItem extends PureComponent {
	render() {
		// props:
		// - type: string, required, default: 'default'
		// - value: string
		// - html: object with key '__html' and value: string
		if ((this.props.type && this.props.value) && (typeof this.props.type === 'string' && typeof this.props.value === 'string') && (!this.props.html)) return(<li data-notification-type={this.props.type} onClick={this.props.markAsRead}>{this.props.value}</li>)
		if ((!this.props.type) && (this.props.html) && (this.props.html.__html)) return(<li data-notification-type="default" dangerouslySetInnerHTML={this.props.html} onClick={this.props.markAsRead}></li>)
		if ((this.props.type) && (this.props.html) && (this.props.html.__html)) return(<li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={this.props.markAsRead}></li>)
		return(<li data-notification-type="default" onClick={this.props.markAsRead}>NotificationItem: invalid props</li>)
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

export default NotificationItem