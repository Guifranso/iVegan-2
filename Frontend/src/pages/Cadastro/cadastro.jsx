import "./style.css";
import { Link } from "react-router-dom";
import React from 'react';
import { useAuth } from "../../providers/auth";

function Cadastro() {

  const { user, setUser } = useAuth();
  console.log(user)
  const userAux = { name: '', email: '', senha: '' };

  const handleCadastro = (event) => {
    event.preventDefault();
    localStorage.setItem('user', JSON.stringify(userAux));
    setUser(userAux);
  }

  return (
    <div className="login_body">
      <div className="login_main">
        <form className="loginForm">
          <input className="loginInput" name="nome" placeholder="Nome" onChange={(e) => {userAux.name = e.target.value}}  ></input>
          <input className="loginInput" name="email" placeholder="Email" onChange={(e) => {userAux.email = e.target.value}} ></input>
          <input className="loginInput" type="password" name="senha" placeholder="Senha" onChange={(e) => {userAux.senha = e.target.value}} ></input>
          <button onClick={handleCadastro} to="/home" className="login_entrar">
            Criar conta
          </button>
          <Link to="/" className="cadastro">
            Voltar para o login
          </Link>
        </form>

      </div>
    </div>
  );
}

export default Cadastro;
