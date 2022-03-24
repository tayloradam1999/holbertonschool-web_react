import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import WithLoggingHOC from '../HOC/WithLogging'

class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<main className={css(loginStyles.appBody)}>
						<p>Login to access the full dashboard</p>
						<div className={css(loginStyles.inputs)}>
							<label className={css(loginStyles.label)} htmlFor="email" onClick={() => {
								// select corresponding input
								document.getElementById('password').focus();
							}}>Email</label>
							<input type="email" id="email" className={css(loginStyles.input)} />
							<label className={css(loginStyles.label)} htmlFor="password" onClick={() => {
								// select corresponding input
								document.getElementById('password').focus();
							}}>Password</label>
							<input type="password" id="password" className={css(loginStyles.input)} />
							<button className={css(loginStyles.button)}>OK</button>
						</div>
					</main>
				</div>
			</React.Fragment>
		)
	}
}

const primaryColor = '#E11D3F';

const loginStyles = StyleSheet.create({
	appBody: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '3rem',
		height: '100%',
	},

	inputs: {
		'@media (min-width: 350px)': {
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '200px'
		},
		'@media (min-width: 900px)': {
			display: 'flex',
			flexDirection: 'row',
		}
	},

	input: {
		height: '15px',
		marginLeft: '0.2rem',
		marginTop: '0.5rem',
	},

	label: {
		marginTop: '0.5rem',
	},

	button: {
		height: '21px',
		marginTop: '0.6rem',
		maxWidth: '40px',
	}
})


export default WithLoggingHOC(Login)