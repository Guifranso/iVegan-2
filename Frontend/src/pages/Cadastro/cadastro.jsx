import "./style.css";
import { Link } from "react-router-dom";
import React from 'react';
import { useAuth } from "../../providers/auth";
import api from "../../services/api";

function Cadastro() {

  const { user, setUser } = useAuth();
  const userAux = { nome: '', email: '', senhaHash: '', endereco: ''};

  const handleCadastro = async (e) => {
    e.preventDefault();
    try{
      const res = await api.post('/usuarios',userAux)
      console.log(res);

    }catch(err){
      console.log(err);
    }
  }
  // async function getUserAccount(event) {
  //   event.preventDefault();
  //   console.log("puxo")
    
  //   const res = await api.post('/usuarios',{''})
  //   console.log('sssssssssssssssss',res?.data)
    
  // }

  return (
    <div className="login_body">
      <div className="login_main">
        <form className="loginForm">
          <input className="loginInput" name="nome" placeholder="Nome Completo" onChange={(e) => {userAux.nome = e.target.value}}  ></input>
          <input className="loginInput" name="email" placeholder="Email" onChange={(e) => {userAux.email = e.target.value}} ></input>
          <input className="loginInput" type="password" name="senha" placeholder="Senha" onChange={(e) => {userAux.senhaHash = e.target.value}} ></input>
          <input className="loginInput" name="endereco" placeholder="Endereço" onChange={(e) => {userAux.endereco = e.target.value}} ></input>
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
