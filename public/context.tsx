import {createContext, useState} from 'react';

export const LoginContext = createContext({
    id: '',
    setID: (uniqueID: string) => {},
});

export const Provider = ({children}) => {
    const [id, setID] = useState("default");

    return (
        <LoginContext.Provider value={{id, setID}}>
          {children}
        </LoginContext.Provider>
    );
  };