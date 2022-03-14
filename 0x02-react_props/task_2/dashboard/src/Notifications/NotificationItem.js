import React from 'react'

export default function NotificationItem(props) {
	// props:
	// - type: rendered with data-notification-type
	// - html: rendered within the tag <li>
	// - value: rendered with dangerouslySetInnerHTML
	return (
		<li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>
			{props.value}
		</li>
	)
}