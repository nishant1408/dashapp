import { LOGIN_USER, LOGOUT_USER, ADD_USER, SET_USERS, ADD_APP_USER } from "../actions/users";

const initialState = {
    users: [],
    loggedIn: false,
    loggedInUserName : "",
    appUsers: [{name:"Nishant",username:"nishant.kumar4@icloud.com",password:"12345678"}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_USER:
            return {
                ...state,
                loggedIn: false,
                loggedInUserName : ""
            };
        case LOGIN_USER:
            return {
                ...state,
                loggedIn: true,
                loggedInUserName : action.loggedInUserName
            };
        case ADD_USER:
            const newUser = { ...action.user, id: state.users.length + 1 };
            return {
                ...state,
                users: state.users.concat(newUser)
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case ADD_APP_USER:
            return {
                ...state,
                appUsers: state.appUsers.concat(action.user)
            };
        default:
            return state;
    }
};