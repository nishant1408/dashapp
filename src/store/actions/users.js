export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_USER = 'ADD_USER';
export const SET_USERS = 'SET_USERS';
export const ADD_APP_USER = 'ADD_APP_USER';

export const logoutUser = () => {
    return { type: LOGOUT_USER };
};

export const loginUser = (name) => {
    return { type: LOGIN_USER, loggedInUserName: name };
}

export const getUsers = (users) => {
    return { type: SET_USERS, users: users };
}

export const addAppUser = (name, username, password) => {
    const user = {
        name: name,
        username: username,
        password: password
    }
    return { type: ADD_APP_USER, user: user };
}

export const addUser = (name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, addressGeoLat, addressGeoLng, phone, website) => {
    return {
        type: ADD_USER,
        user: {
            name: name,
            username: username,
            email: email,
            address: {
                street: addressStreet,
                suite: addressSuite,
                city: addressCity,
                zipcode: addressZipcode,
                geo: {
                    lat: addressGeoLat,
                    lng: addressGeoLng
                }
            },
            phone: phone,
            website: website,
            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
        }
    };
}