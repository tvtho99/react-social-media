import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext({
  currentUser: {
    id: Number,
    name: String,
    avatar: String,
  },
  login: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  const login = () => {
    //...
    setCurrentUser({
      id: 1,
      name: 'Shinagawa',
      avatar:
        'https://images.unsplash.com/photo-1666551364866-a9c8d279c59a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    });

    return <Navigate to="/" />;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
