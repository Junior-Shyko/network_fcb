import React, { createContext, useEffect, useState } from 'react';
import { useNavigate  } from "react-router-dom";
// import { Container } from './styles';
export const AuthContext = createContext();

function AuthProvider({children}) {
    const [auth, setAuth] = useState(false)
    const [ user, setUser] = useState()
    const [ token, setToken] = useState()
    const navigate = useNavigate();
      
    if(!auth) {
        console.log('signout ' , auth)
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
        navigate('authentication/sign-in')
        // window.location.href="";
    }{
        sessionStorage.setItem('token' , token)
        sessionStorage.setItem('user' , user)
    }

  return (
    <AuthContext.Provider value={{auth, setAuth, user, setUser, token, setToken}}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;