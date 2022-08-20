import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = () => setIsLoggedIn(true);
    const logOut = () => setIsLoggedIn(false);

    return (
        <UserContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {props.children}
        </UserContext.Provider>
    );
}


export default UserContextProvider;
