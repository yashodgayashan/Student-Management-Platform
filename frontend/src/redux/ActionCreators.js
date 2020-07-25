import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addUser = (user) => ({	
    type: ActionTypes.ADD_USER,
    payload: user
});

export const fetchUsers = () => (dispatch) => {

    dispatch(usersLoading(true));		
	
	return fetch(baseUrl + 'users')		
		.then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
		.then(response => response.json())		
		.then(users => dispatch(addUsers(users)))		
		.catch(error => dispatch(usersFailed(error.message)));
}

		export const usersLoading = () => ({
			type: ActionTypes.USERS_LOADING		
		});

		export const usersFailed = (errmess) => ({	
			type: ActionTypes.USERS_FAILED,
			payload: errmess
		});

		export const addUsers = (users) => ({		
			type: ActionTypes.ADD_USERS,			 
			payload: users							
		});
		

export const postUser = (username, password, address, email, telnum, type) => (dispatch) => {

    const newUser = {		
        username: username,			
        password: password,
        address: address,
        email: email,
		telnum: telnum,
		type: type
    };


	return fetch(baseUrl + 'users', {
        method: "POST",
        body: JSON.stringify(newUser),	
        headers: {
          "Content-Type": "application/json"	
        },
        credentials: "same-origin"	
    })
    .then(response => {			
        if (response.ok) {
          return response;
        } else {				
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })		
    .then(response => response.json())
    .then(response => dispatch(addUser(response)))
    .catch(error => {
      console.log("post users", error.message);
      alert("New user could not be added\nError: " + error.message);
    });
};
