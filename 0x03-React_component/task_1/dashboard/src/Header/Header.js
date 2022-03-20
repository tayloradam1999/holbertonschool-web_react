import React, { Component } from 'react'
import logo from '../assets/logo.jpg'
import './Header.css'

export default function Header(props) {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1>School dashboard</h1>
		</header>
	)
}