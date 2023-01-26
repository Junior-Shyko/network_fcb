import React, { createContext, useEffect, useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { api } from 'services/Api';
// import { useSnackbar } from 'notistack';
// import { Container } from './styles';

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [ auth, setAuth] = useState(false)
  const [ user, setUser] = useState()
  const [ token, setToken] = useState()
  const navigate = useNavigate();

   useEffect(() =>{
    const userToken = sessionStorage.getItem("token");
    const userAuth = sessionStorage.getItem("user");
    console.log({userAuth})
    if(userAuth) {
      // console.log({userAuth})
      setUser(JSON.parse(userAuth))
      setAuth(true)
    }else{
      navigate("authentication/sign-in")
    }

   },[])


  const signin = (intentifier, password) => {
    //CREDENCIAIS PARA AUTENTICAÇÃO
    var dataAuth = {identifier: intentifier, password: password}
    api.post('auth/local',dataAuth )
    .then((res) => {
      //CONVERTENDO PARA STRING PARA A GUARDAR NA SESSÃO
      const usersStorage = JSON.stringify(res.data.user);
      sessionStorage.setItem('token' , res.data.jwt)
      sessionStorage.setItem('user' , usersStorage)
      //ATRIBUINDO O VALOR DE CADA UM
      setAuth(true)
      setToken(res.data.jwt)
      setUser(res.data.user)
      // REDIRECIONANDO
      navigate("dashboard")
    })
    .catch((err) => {
      console.log(err)
    })
    // return  validate;
  }

  const signout = () => {
    // setUser(null);
    console.log('signout auth.js')
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/authentication/sign-in")
  };

  return (
    <AuthContext.Provider value={{auth, setAuth, user, setUser, token, setToken, signin}}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;