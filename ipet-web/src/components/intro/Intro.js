import React from "react";
import './Intro.css';
import IntroImage from '../../Assets/intro.png'
import { Link } from "react-router-dom";

export function Intro(props) {
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
        <h2>Para o melhor cuidado
          <br />com seu pet e seu tempo
        </h2>
        <p>
          Vamos te ajudar a encontrar o melhor cuidado
          <br />para o seu pet com o menos tempo possível
        </p>
      </div>
      <Link to="/cadastro">
        <button className="btn-faca-parte">Faça seu cadastro</button>
      </Link>  
    </>
  );
}
