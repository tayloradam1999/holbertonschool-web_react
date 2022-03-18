## Trimester 5 - React
All of the concept based React projects for Holberton Tulsa

## [0x00-Webpack](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x00-Webpack)
Webpack is an open-source JavaScript module bundler. It is made primarily for ```JavaScript```, but it can transform front-end assets such as ```HTML```, ```CSS```, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.  
  
```Node.js``` is required for using webpack.  
  
Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line or can be configured using a configuration file which is named webpack.config.js. This file defines rules, plugins, etc., for a project. (webpack is highly extensible via rules which allow developers to write custom tasks that they want to perform when bundling files together.)  
  
### Learning Objectives  
- How to setup Webpack for a basic project
- Entry points, output, and loaders
- How to add plugins
- How to split your code into chunks
- How to setup a dev server  
  
**Example of ```webpack.config.js``` file**  
  
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		all: [
			'./modules/header/header.js',
			'./modules/body/body.js',
			'./modules/footer/footer.js',
		]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true
						},
					},
				],
			},
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, './public'),
		compress: true,
		port: 8564
	},
	plugins: [
		new CleanWebpackPlugin(), // clean the public folder before building
		new HtmlWebpackPlugin() // Generates default index.html
	],
	optimization: {
		splitChunks: {
			chunks: 'all' // split all chunks
		}
	}
	
}
```  
  
## [0x01-react_intro](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x01-react_intro)  
  
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.  
  
Build encapsulated components that manage their own state, then compose them to make complex UIs.  
  
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.  
  
React can also render on the server using ```Node``` and power mobile apps using ```React Native```.  
  
### Learning Objectives  
- How to create a basic Javascript application using React
- How to use the package ```create-react-app```to start developing quickly with React
- What JSX is and how to use it
- How to use the React Developer Tools to debug your code
- How to use Enzyme’s Shadow rendering to test your application
- How to use React with Webpack & Babel
  
**Example of a basic React app**  
  
```index.html```  
  
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```  
   
```App.js``` 
   
```javascript
import React, { Component } from 'react'
import logo from './logo.jpg'
import { getFullYear, getFooterCopy } from './utils'

export default class App extends Component {
	render() {
		return (
			<div className="App">
	  			<header className="App-header">
		  			<img src={logo} className="App-logo" alt="logo" />
		  			<h1>School dashboard</h1>
	  			</header>
	 			<body className="App-body">
		 		 	<p>Login to access the full dashboard</p>
	  			</body>
				<footer className="App-footer">
					<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
				</footer>
			</div>
		)
	}
}
```  
  
```index.js```  
  
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <React.StrictMode>
	<div className="root-notifications">
	  <Notifications />
	</div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
```  
