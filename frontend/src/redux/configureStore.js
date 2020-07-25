import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Users } from './users';	//reducer
import thunk from 'redux-thunk';
import logger from 'redux-logger';	
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ 		
			users: Users,
			...createForms({		//adds the necessary reducer functions and states for forms
				feedback: InitialFeedback
			})
		}),
		applyMiddleware (thunk, logger)	
    );

    return store;
}