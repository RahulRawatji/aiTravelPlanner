import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({children}) =>{
    const [username, setUserName] = useState(null);

    const usernameHandler = (value) =>{
        setUserName(value);
    }

    return <UserContext.Provider value={{username, usernameHandler}}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;