import React, { createContext, useEffect, useReducer } from 'react'
import { authReducer } from '../reducer/authReducer';

const initState = {
  user: {
    username: '',
    password: '',
    id: ''
  }
}

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [user, dispatch] = useReducer(authReducer, {}, () => {
    const localData = localStorage.getItem('userAuth');
    return localData ? JSON.parse(localData) : {}
  })

  useEffect(() => {
    localStorage.setItem('userAuth', JSON.stringify(user))
  }, [user])

  return (
    <AuthContextProvider value={{ user, dispatch }}>
      {props.children}
    </AuthContextProvider>
  )
}

export default AuthContextProvider