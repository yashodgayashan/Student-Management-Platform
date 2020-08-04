import uuid from 'uuid/v4';

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USERS':
        return {...state, errMess: null, users: action.payload};
    
    case 'USERS_FAILED':
        return {...state, errMess: action.payload};

    case 'ADD_USER':
        var user = action.payload;
        return { ...state, users: state.users.concat(user)};

    default:
    return state;
}
} 
