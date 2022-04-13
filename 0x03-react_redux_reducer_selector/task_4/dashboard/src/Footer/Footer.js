import React, { useContext } from 'react'
import AppContext from '../App/AppContext'
import { getFullYear, getFooterCopy } from '../utils/utils'

export default function Footer() {
	const { user, logOut } = useContext(AppContext)

	if (!user.isLoggedIn) {
		return (
			<footer className="App-footer">
				<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
			</footer>
		)
	} else {
		return (
			<footer className="App-footer">
				<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
				<a href="">Contact us</a>
			</footer>
		)
	}
}