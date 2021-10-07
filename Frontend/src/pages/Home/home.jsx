import './style.css';
import Footer from '../../components/Footer/Footer'
import Item from '../../components/Item/Item'
import { Redirect } from 'react-router-dom';


function Home() {

  const userLogado = localStorage.getItem('logado')
  if(userLogado === false || userLogado == null) {
    console.log("Voce nao esta logado")
    return <Redirect to="/" />
  }

  return (
    <>
      <main className="homeMain">
        <h2> Promoções </h2>
        <div className="banner">
          <button className="banner_button"> Explorar </button>
        </div>
        <h2> Destaques </h2>

        <Item/>

        <Item/>

        <Item/>

      </main>
      <Footer/>
    </>
  );
}

export default Home;
