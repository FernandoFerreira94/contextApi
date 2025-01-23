import Nome from "../Nome";

export default function Aluno() {
  return (
    <>
      <Titulo>
        <h1>Bem vindo a escola</h1>
      </Titulo>
      <span>Bem Vindo! a escola Illza Irma</span>
      <Nome />
    </>
  );
}

function Titulo({ children }) {
  return <>{children}</>;
}
