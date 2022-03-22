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
  
**Example of a basic ```React app```**  
  
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
  
## [0x02-react_props](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x02-react_props)
  
Props stand for *"Properties."* They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.    
  
Props are **immutable** so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as this.props and can be used to render dynamic data in our render method.  
  
When you need immutable data in the component, you have to add props to ```reactDom.render()``` method in the ```main.js``` file of your ReactJS project and used it inside the component in which you need. It can be explained in the below example.  
  
### Learning Objectives
- How to create basic React components using functions
- How to reuse components
- How to pass properties to components
- How to define types for components
- How to use Fragments
- When to use a key to improve a loop’s performance  
  
**Here is an example of React *"properties"* being utilized.**  
  
```App.js```  
  
```javascript
import React, { Component } from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
            <h1> Welcome to { this.props.name } </h1>    
            <p> <h4> Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. </h4> </p>          
          </div>  
      );  
   }  
}  
export default App;  
```  
  
```Main.js```
  
```javascript
import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App.js';  
  
ReactDOM.render(<App name = "JavaTpoint!!" />, document.getElementById('app')); 
```  
  
**Output**  
  
```
Welcome to JavaTpoint!!
Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.
```
  
## [0x03-React_component]()
  
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.  
  
Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.  
  
### Learning Objectives  
- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to utilize a Jest spy to verify that a function is being called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components to render  
  
### Create your first component  
  
When creating a React component, the component's name MUST start with an upper case letter  
  
#### Class Component  
  
A class component must include the ```extends React.Component``` statement. This statement creates an inheritance to ```React.Component```, and gives your component access to ```React.Component's``` functions.  
  
The component also requires a ```render()``` method, this method returns HTML.  
  
#### Example - Create a class component called 'Car'  
  
```javascript
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```  
  
#### Function Component  
  
Here is the same example as above, but created using a Function component instead.  
  
A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.  
  
#### Example - Create a function component called 'Car'  
  
```javascript
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```  
  
### Rendering a Component  
  
Now your React application has a component called Car, which returns an ```<h2>``` element.

To use this component in your application, use similar syntax as normal HTML: ```<Car />```  
  
#### Example - Display the 'Car' component in the "root" element:  
  
```javascript  
ReactDOM.render(<Car />, document.getElementById('root'));
```   
  
## [0x04-React_inline_styling](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x04-React_inline_styling)  
  
## Learning Objectives
- the differences between using a CSS file and inline styling
- how to use a CSS-in-JS tool like Aphrodite
- how to use conditions within JS to apply different styles
- how to use responsive design and make the application show a different UI according to the screen size
- how to create small animations within the app  
  
The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes. **For example:**
  
```javascript
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```
  
Note that styles are not autoprefixed. To support older browsers, you need to supply corresponding style properties:  
  
```javascript
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>;
}
```  
  
Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes from JS (e.g. ```node.style.backgroundImage```). Vendor prefixes other than ms should begin with a capital letter. This is why ```WebkitTransition``` has an uppercase “W”.  
  
React will automatically append a “px” suffix to certain numeric inline style properties. If you want to use units other than “px”, specify the value as a string with the desired unit. For example:  
  
```javascript
// Result style: '10px'
<div style={{ height: 10 }}>
  Hello World!
</div>

// Result style: '10%'
<div style={{ height: '10%' }}>
  Hello World!
</div>
```  
  
Not all style properties are converted to pixel strings though. Certain ones remain unitless (eg ```zoom```, ```order```, ```flex```). A complete list of unitless properties can be seen here.
  


