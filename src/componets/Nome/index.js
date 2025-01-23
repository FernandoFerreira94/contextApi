import { useContext, useState } from "react";
import { UserContext } from "../../context/user";

export default function Nome() {
  const { aluno, setAluno } = useContext(UserContext);
  const [nome, setNome] = useState("");

  function handleTroca() {
    setNome(aluno);
    setAluno("");
  }
  return (
    <>
      <p>
        Hello <span style={{ color: "red", fontWeight: "bold" }}>{nome}</span>
      </p>
      <input
        type="text"
        value={aluno}
        onChange={(e) => setAluno(e.target.value)}
      />
      <br />
      <button onClick={handleTroca}>Troca nome</button>
    </>
  );
}
