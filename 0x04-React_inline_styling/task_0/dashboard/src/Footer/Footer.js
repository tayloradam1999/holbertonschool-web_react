import React from 'react'
import { getFullYear, getFooterCopy } from '../utils/utils'
import './Footer.css'

function Footer(props) {
	return (
		<footer className="App-footer">
			<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
		</footer>
	)
}


export default Footer