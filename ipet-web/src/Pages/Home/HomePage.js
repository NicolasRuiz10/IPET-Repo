import React from "react";
import './HomePage.css';
import { Intro } from "../../components/intro/Intro";
import { Menu } from "../../components/menu/Menu";
import { Footer } from "../../components/footer/footer";
import MagnusLogo from '../../Assets/magnus.png'
import PedigreeLogo from '../../Assets/pedigree.png'
import PurinaLogo from '../../Assets/purina.png'
import WhiskasLogo from '../../Assets/whiskas-logo.png'
import banhoTosa from '../../Assets/banhoTosa.png'
import saude from '../../Assets/saude.png'
import {Button} from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



function HomePage() {
  let history = useHistory();
  function redirectLoginPet() {
    history.push("/petshop/login");
  }
  function redirectLoginCliente() {
    history.push("/login");
  }
  return (
    <>
      <Menu menuItem1="PetShop" menuItem2="Produtos" menuItem3="Serviços" />
      <Intro />
      <section className="brands">
        <div>
          <h1 className="brandTitle">
            Principais marcas
          </h1>
          <br />
          <h2 className="brandText">
            Aqui você encontra as melhores marcas que oferecemos com suma confianças
          </h2>
        </div>
        <div className="brandsImages">
          <div className="brand1">
            <img clasName="brand1" src={MagnusLogo} height="80px" width="120px" alt="none" />
          </div>
          <div className="brand2">
            <img clasName="brand2" src={PedigreeLogo} height="80px" width="120px" alt="none" />
          </div>
          <div className="brand3">
            <img src={PurinaLogo} height="80px" width="120px" alt="none" />
          </div>
          <div className="brand4">
            <img src={WhiskasLogo} height="80px" width="120px" alt="none" />
          </div>
        </div>
      </section>
      
      <section className="products">
        <h3>Produtos de diversas lojas</h3>
        <div className="products--categorias">
        <div className="categorias">
          <div className="categorias-text">
            <h3>Vestuario</h3>
            <Link to="/produtos">
              <button>Compre</button>
            </Link>
          </div>
          <img src="https://lojadogu.vteximg.com.br/arquivos/ids/157484-400-400/Roupa-para-Cachorro-Corta-Vento-Verde.png?v=637594420928300000" alt="" />
        </div>
        <div className="categorias">
        <div className="categorias-text">
            <h3>Acessórios</h3>
            <Link to="/produtos">
              <button>Compre</button>
            </Link>  
          </div>
          <img src="https://www.vippng.com/png/full/131-1317350_todos-os-tipos-de-acessorios-para-caes-e.png" alt="" />
        </div>
        <div className="categorias">
        <div className="categorias-text">
            <h3>Brinquedos</h3>
            <Link to="/produtos">
              <button>Compre</button>
            </Link>  
          </div>
          <img src="https://lh3.googleusercontent.com/proxy/VPbaTZLr_70fQlLWycvjXovOp5IbBrbU-QIm6p94pfS07xrqxE90fkWhn70cP0DX9jbZCZNwGASPtZl5VBGWDkFlrg2PSHO0ICoFyNqPzRY0bL0SjklFqza5Bgo0Owb30zaRqWlrPaQRsxqUc2iEoUn9YWCh" alt="" />
        </div>
        <div className="categorias">
        <div className="categorias-text">
            <h3>Rações</h3>
            <Link to="/produtos"> 
              <button>Compre</button>
            </Link>  
          </div>
          <img src="https://img.freepik.com/fotos-gratis/alimentos-para-animais-de-estimacao-secos-em-uma-tigela-de-ceramica-branca-isolada-na-superficie-branca_128711-2795.jpg?size=626&ext=jpg" alt="" />
        </div>
        <div className="categorias">
        <div className="categorias-text">
            <h3>Higiene</h3>
            <Link to="/produtos">
              <button>Compre</button>
            </Link>  
          </div>
          <img src="https://saude.abril.com.br/wp-content/uploads/2020/06/banho-do-pet-em-casa.png" alt="" />
        </div>
        <div className="categorias">
        <div className="categorias-text">
            <h3>Pestiscos</h3>
            <Link to="/produtos">
              <button>Compre</button>
            </Link>  
          </div>
          <img src="https://www.bichosaudavel.com/wp-content/uploads/2013/08/biscoito-cachorro.jpg" alt="" />
        </div>
        </div>
      </section>
      <section className="health">
        <div className="healthContent">
          <h2>IPET - SAÚDE</h2>
          <p className="mb-1 format-text">
            Aqui você pode marcar o exame do seu pet com veterinarios profissionais.
            A saúde e bem estar do seu pet em dia só na IPET
          </p>
            <Button btnTitle="Faça parte" clickButton={redirectLoginPet}/>
        </div>
        <div className="healthImg box-shadow-image">
          <img clasName="" src={saude} height="400px" width="580px" alt="none" />
        </div>
      </section>

      <section className="bathAndGroom">
        <div className="bathAndGroomContent">
          <div className="box-shadow-image">
            <img clasName="" src={banhoTosa} height="400px" width="580px" alt="none" />
          </div>
          <div className="bathAndGroomText">
            <h2>BANHO E TOSA</h2>
            <p className="mb-1">
              Todos os cuidados higienicos com os melhores produtos!<br />
              Encontre agora o petshop mais próximo do seu lar<br />
            </p>
            <Button btnTitle="Faça parte" clickButton={redirectLoginCliente}/>
          </div>
        </div>
      </section>
      <Footer item1="Termos e condições de usos" item2="Políticas e termos" item3="Help desk" item4="Formas de pagamento" />
    </>
  );
}

export default HomePage;