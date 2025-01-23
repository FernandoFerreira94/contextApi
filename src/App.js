import { useState } from "react";
import Aluno from "./componets/Aunos";
import UserProvider from "./context/user";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Hello</h1>
        <hr />
        <Aluno />
      </div>
    </UserProvider>
  );
}

export default App;
