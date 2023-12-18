import React, { createContext, useContext, useEffect, useState } from 'react'
import { generateUsers, sortDataById, sortDataByName } from './Data';
import { Items } from './Data';
const GlobalDataContext = createContext<any>([]);

export const MyProvider = ({ children }: { children: React.ReactNode }) => {

  const [data, setData] = useState(Items);
  const [Sorted, setSorted] = useState<any>();
  const [user, setUser] = useState([]);
  const generat = async () => {
    setUser(await generateUsers(4));
  }
  const sortData = () => {
    !Sorted ? setData(sortDataByName(Items)) : setData(sortDataById(Items));
    setSorted(!Sorted);
  }
  useEffect(() => {
    generat();
  }, []);

  const TableData = {
    data, Sorted, sortData, user, setData
  };

  return (
    <GlobalDataContext.Provider value={TableData}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export const useData = () => {
  const data = useContext(GlobalDataContext);
  if (!data) {
    throw new Error("use Data must be used within a Provider");
  }
  return data;
}


// export const UserContext = createContext<User | null>(null);
// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [user, setUser] = useState<User | null>(null);

// export function useUserContext () {

//   const user = useContext(UserContext);
//   if (user === undefined) {
//     throw new Error('useUserContext must be used within a UserContext');
//   }
//   return user;

// }
