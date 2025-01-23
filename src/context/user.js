import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [aluno, setAluno] = useState("");
  return (
    <UserContext.Provider value={{ aluno, setAluno }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
