import React from "react";
import './Intro.css';
import { Link } from "react-router-dom";
import IntroImage from '../../Assets/imagePetShop.png'

export function IntroPet(props) {
  return (
    <>
      <div className="intro">
        <div className="intro-text">

        </div>
        <div className="intro-img">
          <img src={IntroImage} alt="Iamgem do introdução" />
        </div>
      </div>
      <div className="text">
        <h2>Seu Pet shop com mais visibilidade
          <br />e vendendo como nunca
        </h2>
        <p>
          Aumente suas vendas com iPet
          <br />anuncie seus produtos e serviços
          e aumente seu faturamento
        </p>
      </div>
      <Link to="/cadastro">
        <button className="btn-faca-parte">Cadastre-se</button>
      </Link>
      <p className="jaEcliente">
      Já é nosso parceiro?
      </p>
      <Link to="/cadastro">
        <button className="btn-faca-login">Login</button>
      </Link>
    </>
  );
}
