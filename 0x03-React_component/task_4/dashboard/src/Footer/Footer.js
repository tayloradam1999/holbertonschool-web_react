import React from 'react'
import WithLoggingHOC from '../HOC/WithLogging'
import { getFullYear, getFooterCopy } from '../utils/utils'
import './Footer.css'

function Footer(props) {
	return (
		<footer className="App-footer">
			<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
		</footer>
	)
}


export default WithLoggingHOC(Footer);