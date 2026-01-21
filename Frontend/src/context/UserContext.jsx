import React, { useState } from "react";
import { createContext } from "react";

const UserContext = ({ children }) => {
    const UserDataContext = createContext()
    const [user, setUser] = useState({
        email: "",
        fullName:{
            firstName: "",
            lastName: ""
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={user}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
};

export default UserContext;
