import React, { useContext } from 'react'
import { StyleSheet, css } from 'aphrodite'
import AppContext from '../App/AppContext'
import logo from '../assets/logo.jpg'


export default function Header() {
	const { user, logOut } = useContext(AppContext);

	if (!user.isLoggedIn) {
		return (
			<header className={css(headerStyles.appHeader)}>
				<img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
				<h1>School dashboard</h1>
			</header>
		)
	} else {
		return (
			<React.Fragment>
				<header className={css(headerStyles.appHeader)}>
					<img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
					<h1>School dashboard</h1>
				</header>
				<div className={css(headerStyles.greeting)} id="logoutSection">
					<h2>Welcome
						<strong> {user.email} </strong>
						{/* if user clicks on logout button, calls logOut function in AppContext */}
						<em><a href="#" onClick={logOut}>(logout)</a></em>
					</h2>
				</div>
			</React.Fragment>
		)
	}
}


const primaryColor = '#E11D3F';

const headerStyles = StyleSheet.create({
	appHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: `${primaryColor}`,
		borderBottom: `1px solid ${primaryColor}`,
	},

	appLogo: {
		height: '200px',
		width: '200px'
	},
});
