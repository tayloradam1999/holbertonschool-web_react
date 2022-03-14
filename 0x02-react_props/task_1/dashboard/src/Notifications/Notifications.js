import React from 'react'
import close_icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

import './Notifications.css'

export default function Notification(props) {
  return (
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
		  <li data-priority="default">New course available</li>
		  <li data-priority="urgent">New resume available</li>
	  	  <li dangerouslySetInnerHTML={getLatestNotification()}></li>
	  </ul>
	</div>
  )
}