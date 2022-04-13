import React from 'react';


export const user = {
	email: '',
	password: '',
	isLoggedIn: false
}

export const logOut = () => {
	user.isLoggedIn = false;
}

const AppContext = React.createContext({
	user,
	logOut
});


export default AppContext;
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;