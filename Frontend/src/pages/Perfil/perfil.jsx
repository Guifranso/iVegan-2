import './style.css';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import { ReactComponent as SairSVG } from './../../assets/svgs/Sair.svg'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../providers/auth';

function Perfil() {

  const { user, setUser } = useAuth();
  console.log(user);
  const [ sair, setSair ] = useState(false);
  const userLogado = localStorage.getItem('logado')
  if (userLogado === false || userLogado == null) {
    console.log("Voce nao esta logado")
    return <Redirect to="/" />
  }

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('logado');
    localStorage.removeItem('user');
    setSair(true);
    return <Redirect to="/" />
  }
  if(sair === true) {
    return <Redirect to="/home"/>
  }
  return (
    <>
      <div className="perfilMain">
        <h2 className="title"> Perfil </h2>
        <div className="fotoPerfil"></div>
        <h2> {user.name} </h2>

        <table className="tabelaPerfil">
          <tr className="tabelaPerfil_head">
            <th>Endereço:</th>
            <th>Carteira:</th>
            <th>Email:</th>
          </tr>
          <tr className="tabelaPerfil_data">
            <td>Av Uirapuru 157</td>
            <td>Visa ****-****-157</td>
            <td>Guilherme@gmail.com</td>
          </tr>
        </table>

        <Link onClick={handleLogout} to="/" className="sair">
          <p>Sair</p>
          <SairSVG />
        </Link>

      </div>
      <Footer />
    </>
  );
}

export default Perfil;
