import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import WithLoggingHOC from '../HOC/WithLogging'


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false,
		}
	}

    handleLoginSubmit() {
        this.setState({isLoggedIn: true});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleChangeEnableSubmit(event) {
        this.setState({enableSubmit: event.target.value});
    }

	render() {
		return (
			<React.Fragment>
				<div className="App">
					<main className={css(loginStyles.appBody)}>
						<p>Login to access the full dashboard</p>
						<form>
							<div className={css(loginStyles.inputs)}>
								<label
                                    className={css(loginStyles.label)}
                                    htmlFor="email"
                                    onClick={() => {
									    document.getElementById('password').focus();
								    }}>
                                    Email
                                </label>
								<input
                                    type="email"
                                    id="email"
                                    className={css(loginStyles.input)}
                                    value={this.state.email}
                                    onChange={(event) => {
                                        if (event.target.value.length > 0 && this.state.password.length > 0) {
                                            this.setState({enableSubmit: true});
                                        } else {
                                            this.setState({enableSubmit: false});
                                        }
                                        this.handleChangeEmail(event);
                                    }}
                                />
								<label
                                    className={css(loginStyles.label)}
                                    htmlFor="password"
                                    onClick={() => {
									    document.getElementById('password').focus();
								    }}>
                                    Password
                                </label>
								<input 
                                    type="password"
                                    id="password"
                                    className={css(loginStyles.input)} 
                                    value={this.state.password}
                                    onChange={(event) => {
                                        if (event.target.value.length > 0 && this.state.email.length > 0) {
                                            this.setState({enableSubmit: true});
                                        } else {
                                            this.setState({enableSubmit: false});
                                        }
                                        this.handleChangePassword(event);
                                    }}
                                />
								<input
                                    type="submit"
									id="submit"
                                    className={css(loginStyles.button)}
                                    value="Login"
                                    disabled={!this.state.enableSubmit}
                                    onClick={() => {
                                        this.handleLoginSubmit();
                                    }}
                                />
							</div>
						</form>
					</main>
				</div>
			</React.Fragment>
		)
	}
}

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