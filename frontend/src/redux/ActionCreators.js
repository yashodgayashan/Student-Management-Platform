import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addUser = (user) => ({	
    type: ActionTypes.ADD_USER,
    payload: user
});


export const fetchUsers = () => (dispatch) => {

    dispatch(usersLoading(true));			//sets loading to true	
	
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
		.then(users => dispatch(addUsers(users)))			//if successful in getting users call the addUsers action passing in the list of users available in users
		.catch(error => dispatch(usersFailed(error.message)));
}

		export const usersLoading = () => ({
			type: ActionTypes.USERS_LOADING		
		});

		export const usersFailed = (errmess) => ({	
			type: ActionTypes.USERS_FAILED,
			payload: errmess
		});

		export const addUsers = (users) => ({			//will store the fetched users in our state
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



export const deleteUser = (id) => (dispatch) => {

	return fetch(baseUrl + 'users/' + id.toString(), {
        method: "DELETE",	
        headers: {
          'Content-type': 'application/json; charset=UTF-8'	
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
    .then(response => alert("User Deleted!" + JSON.stringify(response)))
	.then(x => dispatch(fetchUsers()))
    .catch(error => {
      console.log("post feedbacks", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};



