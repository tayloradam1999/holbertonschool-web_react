import React, { Component } from 'react'
import WithLoggingHOC from '../HOC/WithLogging'
import './Login.css'

class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<main className="App-body">
						<p>Login to access the full dashboard</p>
						<div className="inputs">
							<label htmlFor="email" onClick={() => {
								// select corresponding input
								document.getElementById('password').focus();
							}}>Email</label>
							<input type="email" id="email" />
							<label htmlFor="password" onClick={() => {
								// select corresponding input
								document.getElementById('password').focus();
							}}>Password</label>
							<input type="password" id="password" />
							<button>OK</button>
						</div>
					</main>
				</div>
			</React.Fragment>
		)
	}
}


export default WithLoggingHOC(Login)