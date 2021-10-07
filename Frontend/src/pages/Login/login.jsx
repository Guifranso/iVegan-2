// import react from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import api from "../../services/api";

function Login() {

  const [ logado, setLogado ] = useState(false);
  console.log(logado)
  const [ sair, setSair ] = useState(false);
  const userAux = { nome: '', senhaHash: '' };

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const res = await api.post('/usuariosLoga',userAux)
      console.log(res.data);
      localStorage.setItem('logado', JSON.stringify(true))
      setLogado(true);
      setSair(true);
      console.log(res);
    } catch(err){
      console.log(err);
      alert("deu ruim")
    }
  }

  if(sair === true) {
    return <Redirect to="/home"/>
  }

  return (
    <div className="login_body">
      <div className="login_main">
        <h1 className="login_title"> iVegan </h1>
        <form className="loginForm">
          <input name="usuario" className="loginInput" onChange={(e) => {userAux.nome = e.target.value}} placeholder="Usuário"></input>
          <input name="senha" className="loginInput" onChange={(e) => {userAux.senhaHash = e.target.value}} placeholder="Senha"></input>
          <Link onClick={handleLogin} to="/home" className="login_entrar">
            Entrar
          </Link>
          <Link to="/cadastro" className="cadastro">
            Cadastre-se
          </Link>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
