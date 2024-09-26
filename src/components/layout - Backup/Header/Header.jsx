import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../../assets/logo.png";
import video from "../../../assets/fp.mp4"
import "./Header.css";

export default function Header() {
  return (
    <>
      {/* Vídeo de fundo */}
      <div className="container-header">
        <video className="video-background" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        {/* Conteúdo sobreposto */}
        <div className="overlay-content">
          <div className="nav">
            <Link to="/">
              <img src={Logo} className="Logo" alt="Logo" />
            </Link>
            <ul>
              <li>
                <Link to="/Sobre" className="first-link">Quem Somos</Link>
              </li>
              <li>
                <Link to="/Projetos">Nossos Projetos</Link>
              </li>
              <li>
                <Link to="/Noticias">Notícias</Link>
              </li>
              <div className="doe-btn">
                <Link to="/DoeAgora" className="Doe-agora">Doe Agora!</Link>
              </div>
            </ul>
          </div>
          
          {/* Título sobreposto ao vídeo */}
          <div className="header-content">
            <h1>Inspire <span className="header">esperança</span>,</h1>
            <h1>Transforme vidas</h1>
          </div>
          <div className="header-content2">
            <h1>Promovendo saúde,</h1>
            <h1><span className="header">inclusão</span> e <span className="header">dignidade</span></h1>
          </div>
        </div>
      </div>
    </>
  );
}
