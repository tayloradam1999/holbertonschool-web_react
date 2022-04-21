## Trimester 5 - React
All of the concept based React projects for Holberton Tulsa

## [0x00-Webpack](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x00-Webpack)
Webpack is an open-source JavaScript module bundler. It is made primarily for ```JavaScript```, but it can transform front-end assets such as ```HTML```, ```CSS```, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.  
  
```Node.js``` is required for using webpack.  
  
Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line or can be configured using a configuration file which is named webpack.config.js. This file defines rules, plugins, etc., for a project. (webpack is highly extensible via rules which allow developers to write custom tasks that they want to perform when bundling files together.)  

<hr>
  
### Learning Objectives  
- How to setup Webpack for a basic project
- Entry points, output, and loaders
- How to add plugins
- How to split your code into chunks
- How to setup a dev server  

<hr>
  
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

## [0x00-react_state](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x00-react_state)  
  
### Adding Local State to a Class

Example class using ```this.props``` before altering to ```this.state```:  
  
```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```  
  
We will move the ```date``` from props to state in three steps:  
  
- Replace ```this.props.date``` with ```this.state.date``` in the ```render()``` method:  
  
```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```  
  
- Add a ```class constructor``` that assigns the initial ```this.state```:  
  
```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```  
  
Note how we pass ```props``` to the base constructor:  
  
```javascript
constructor(props) {
    super(props);
    this.state = {date: new Date()};
}
```  
  
Class components should always call the base constructor with ```props```.  
  
- Remove the ```date``` prop from the ```<Clock />``` element:  
  
```javascript
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```  
  
We will later add the timer code back to the component itself.
  
The result looks like this:
  
```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
  
**[Try it on CodePen](https://codepen.io/gaearon/pen/KgQpJd?editors=0010)**

<hr>

### Learning Objectives
- What the state of a component or a container is
- The lifecycle of a component
- How to modify a state and execute code in the right order
- What a controlled component is
- How to use Forms in React
- How to reuse smaller components, keep them pure, and lift its state to principal containers
- The use of a React Hook and how to create one
- How to test State changes with Enzyme
  
## [0x01-React_Immutable](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x01-React_Immutable)
  
```Immutable.js```

**A few exmaples and how to read them**
  
All methods describe the kinds of data they accept and the kinds of data they return. For example a function which accepts two numbers and returns a number would look like this:
  
```javascript
sum(first: number, second: number): number
```
  
Sometimes, methods can accept different kinds of data or return different kinds of data, and this is described with a type variable, which is typically in all-caps. For example, a function which always returns the same kind of data it was provided would look like this:
  
```javascript
identity<T>(value: T): T
```
  
Type variables are defined with classes and referred to in methods. For example, a class that holds onto a value for you might look like this:
  
```javascript
class Box<T> {
  constructor(value: T)
  getValue(): T
}
```
  
In order to manipulate Immutable data, methods that we're used to affecting a Collection instead return a new Collection of the same type. The type this refers to the same kind of class. For example, a List which returns new Lists when you push a value onto it might look like:
  
```javascript
class List<T> {
  push(value: T): this
}
```
  
Many methods in Immutable.js accept values which implement the JavaScript **Iterable** protocol, and might appear like ```Iterable<string>``` for something which represents sequence of strings. Typically in JavaScript we use plain Arrays ```([])``` when an Iterable is expected, but also all of the Immutable.js collections are iterable themselves!
  
For example, to get a value deep within a structure of data, we might use ```getIn``` which expects an ```Iterable``` path:
  
```javascript
getIn(path: Iterable<string | number>): unknown
```
  
To use this method, we could pass an array: ```data.getIn([ "key", 2 ]).```
  
**Note:** Note: All examples are presented in the modern [ES2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) version of JavaScript. Use tools like Babel to support older browsers.
  
<hr>
  
### Learning Objectives
- Immutable objects. Who, what, when, where, and why?
- How to use the Immutable.js library to bring immutability to Javascript
- The differences between List and Map
- How to use Merge, Concat, and Deep Merging
- What a lazy ```Seq``` is
  
<hr>
  
## [0x01-react_intro](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x01-react_intro)  
  
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.  
  
Build encapsulated components that manage their own state, then compose them to make complex UIs.  
  
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.  
  
React can also render on the server using ```Node``` and power mobile apps using ```React Native```.  

<hr>
  
### Learning Objectives  
- How to create a basic Javascript application using React
- How to use the package ```create-react-app```to start developing quickly with React
- What JSX is and how to use it
- How to use the React Developer Tools to debug your code
- How to use Enzyme’s Shadow rendering to test your application
- How to use React with Webpack & Babel

<hr>
  
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

<hr>
  
### Learning Objectives
- How to create basic React components using functions
- How to reuse components
- How to pass properties to components
- How to define types for components
- How to use Fragments
- When to use a key to improve a loop’s performance  

<hr>
  
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
  
[0x02-react_redux_action_creator_normalizr](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x02-react_redux_action_creator_normalizr)
  
Redux is a predictable state container for JavaScript apps.
  
It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, [such as live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).
  
You can use ```Redux``` together with ```React```, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.
  
<hr>
  
### Learning Objectives
- Normalizr’s purpose and how to use it
- schemas and normalization of nested JSON
- core concepts of Redux
- Redux actions
- Redux action creators
- async actions in Redux
- how to write tests for Redux
  
<hr>
  
### Normalizing State Shape
  
Many applications deal with data that is nested or relational in nature. For example, a blog editor could have many Posts, each Post could have many Comments, and both Posts and Comments would be written by a User. Data for this kind of application might look like:
  
```javascript
const blogPosts = [
  {
    id: 'post1',
    author: { username: 'user1', name: 'User 1' },
    body: '......',
    comments: [
      {
        id: 'comment1',
        author: { username: 'user2', name: 'User 2' },
        comment: '.....'
      },
      {
        id: 'comment2',
        author: { username: 'user3', name: 'User 3' },
        comment: '.....'
      }
    ]
  },
  {
    id: 'post2',
    author: { username: 'user2', name: 'User 2' },
    body: '......',
    comments: [
      {
        id: 'comment3',
        author: { username: 'user3', name: 'User 3' },
        comment: '.....'
      },
      {
        id: 'comment4',
        author: { username: 'user1', name: 'User 1' },
        comment: '.....'
      },
      {
        id: 'comment5',
        author: { username: 'user3', name: 'User 3' },
        comment: '.....'
      }
    ]
  }
  // and repeat many times
]
```
  
Notice that the structure of the data is a bit complex, and some of the data is repeated. This is a concern for several reasons:
  
- When a piece of data is duplicated in several places, it becomes harder to make sure that it is updated appropriately.  
- Nested data means that the corresponding reducer logic has to be more nested and therefore more complex. In particular, trying to update a deeply nested field can become very ugly very fast.  
- Since immutable data updates require all ancestors in the state tree to be copied and updated as well, and new object references will cause connected UI components to re-render, an update to a deeply nested data object could force totally unrelated UI components to re-render even if the data they're displaying hasn't actually changed.  
  
Because of this, the recommended approach to managing relational or nested data in a Redux store is to treat a portion of your store as if it were a database, and keep that data in a normalized form.  
  
### Designing a Normalized State
  
The basic concepts of normalizing data are:
  
- Each type of data gets its own "table" in the state.
- Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
- Any references to individual items should be done by storing the item's ID.
- Arrays of IDs should be used to indicate ordering.
  
An example of a normalized state structure for the blog example above might look like:
  
```javascript
{
    posts : {
        byId : {
            "post1" : {
                id : "post1",
                author : "user1",
                body : "......",
                comments : ["comment1", "comment2"]
            },
            "post2" : {
                id : "post2",
                author : "user2",
                body : "......",
                comments : ["comment3", "comment4", "comment5"]
            }
        },
        allIds : ["post1", "post2"]
    },
    comments : {
        byId : {
            "comment1" : {
                id : "comment1",
                author : "user2",
                comment : ".....",
            },
            "comment2" : {
                id : "comment2",
                author : "user3",
                comment : ".....",
            },
            "comment3" : {
                id : "comment3",
                author : "user3",
                comment : ".....",
            },
            "comment4" : {
                id : "comment4",
                author : "user1",
                comment : ".....",
            },
            "comment5" : {
                id : "comment5",
                author : "user3",
                comment : ".....",
            },
        },
        allIds : ["comment1", "comment2", "comment3", "comment4", "comment5"]
    },
    users : {
        byId : {
            "user1" : {
                username : "user1",
                name : "User 1",
            },
            "user2" : {
                username : "user2",
                name : "User 2",
            },
            "user3" : {
                username : "user3",
                name : "User 3",
            }
        },
        allIds : ["user1", "user2", "user3"]
    }
}
```
  
This state structure is much flatter overall. Compared to the original nested format, this is an improvement in several ways:
  
- Because each item is only defined in one place, we don't have to try to make changes in multiple places if that item is updated.
- The reducer logic doesn't have to deal with deep levels of nesting, so it will probably be much simpler.
- The logic for retrieving or updating a given item is now fairly simple and consistent. Given an item's type and its ID, we can directly look it up in a couple simple steps, without having to dig through other objects to find it.
- Since each data type is separated, an update like changing the text of a comment would only require new copies of the "comments > byId > comment" portion of the tree. This will generally mean fewer portions of the UI that need to update because their data has changed. In contrast, updating a comment in the original nested shape would have required updating the comment object, the parent post object, the array of all post objects, and likely have caused all of the Post components and Comment components in the UI to re-render themselves.  
  
## [0x03-React_component]()
  
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.  
  
Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.  

<hr>
  
### Learning Objectives  
- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to utilize a Jest spy to verify that a function is being called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components to render  

<hr>
  
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
  
## [0x03-react_redux_reducer_selector](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x03-react_redux_reducer_selector)
  
### What Is A Reducer
  
A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state. For example, an authentication reducer can take an initial state of an application in form of an empty object and an action that tells it that a user has logged in and returned a new application state with a logged-in user.
  
### What Is A Reducer Selector
  
A selector is a small function you write that can take the entire Redux state, and pick out a value from it.  
  
<hr>
  
### Learning Objectives
- The purpose of a reducer and the role it plays within your application
- Why a reducer should stay as pure as possible
- Why mutations should not happen within a reducer
- The use of Immutable within the reducer
- The use of Normalizr within the app
- Selectors: what they are and when to use them
  
<hr>
  
Here is an **example** of a very basic ```reducer```:
```javascript
const counterReducer = (count, action) => {
  if (action.type === 'INCREASE') {
    return count + 1;
  }

  if (action.type === 'DECREASE') {
    return count - 1;
  }

  return count;
};
```
  
Here is an **example** of a ```reducer selector```:
```javascript
const getCount = (state) => state.count;
```  
  
## [0x04-React_inline_styling](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x04-React_inline_styling)  

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
  
Not all style properties are converted to pixel strings though. Certain ones remain unitless (eg ```zoom```, ```order```, ```flex```). A complete list of unitless properties can be seen [here](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59).  

<hr>
  
### Learning Objectives
- the differences between using a CSS file and inline styling
- how to use a CSS-in-JS tool like Aphrodite
- how to use conditions within JS to apply different styles
- how to use responsive design and make the application show a different UI according to the screen size
- how to create small animations within the app  
  
# [0x04-TypeScript](https://github.com/tayloradam1999/holbertonschool-web_react/tree/main/0x04-TypeScript)  
  
TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
  
TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.
  
TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.