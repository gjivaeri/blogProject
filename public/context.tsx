import { createContext, useState } from 'react';
import Cookies from 'js-cookie';

export const LoginContext = createContext({
  id: '',
  setID: (uniqueID: string) => { },
});

export const Provider = ({ children }) => {
  const [id, setID] = useState("default");

  return (
    <LoginContext.Provider value={{ id, setID }}>
      {children}
    </LoginContext.Provider>
  );
};