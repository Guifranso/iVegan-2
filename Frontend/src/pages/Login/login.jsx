// import react from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Login() {

  const [ logado, setLogado ] = useState(false);
  console.log(logado)
  const [ sair, setSair ] = useState(false);
  const userAux = { name: '', email: '', senha: '' };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('user')))
    console.log(userAux)
    if(userAux.senha === JSON.parse(localStorage.getItem('user')).senha) {
      setLogado(true);
      localStorage.setItem('logado', JSON.stringify(true))
      setSair(true);
      console.log(setSair)
    } else {
      console.log("Login ou senha incorretos")
    }
  }
  if(sair === true) {
    return <Redirect to="/home"/>
  }

  // const usuario = "guilherme"; 
  // const senha = "123456";
  // var usuarioValido = false;
  // var senhaValida = false;
  // function validaUsuario(event) {
  //   console.log(event.target.value);
  //   if(event.target.value == usuario) {
  //     console.log("valido");
  //     usuarioValido = true;
  //   } else {
  //     usuarioValido = false;
  //   }
  // }
  // function validaSenha(event) {
  //   console.log(event.target.value);
  //   if(event.target.value == senha) {
  //     console.log("valido");
  //     senhaValida = true;
  //   } else {
  //     senhaValida = false;
  //   }
  // }
  // function validaLogin(event) {
  // event.preventDefault();
  //   if(usuarioValido && senhaValida) {
  //     console.log("logou");
  //   } else {
  //     console.log("falha no login");
  //   }
  // }

  return (
    <div className="login_body">
      <div className="login_main">
        <h1 className="login_title"> iVegan </h1>
        <form className="loginForm">
          <input name="usuario" className="loginInput" onChange={(e) => {userAux.name = e.target.value}} placeholder="Usuário"></input>
          <input name="senha" className="loginInput" onChange={(e) => {userAux.senha = e.target.value}} placeholder="Senha"></input>
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
