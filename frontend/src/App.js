import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import UserContextProvider from './context/userContext';

const App = props => {
	return (
		<div className="App">
			<UserContextProvider>
				<Main />
			</UserContextProvider>
		</div>
  );	
}
export default App;
