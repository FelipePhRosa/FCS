import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from "../../../assets/logo.png";
import video from "../../../assets/fp.mp4";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container-header">
        <video className="video-background" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        <div className="overlay-content">
          <div className="nav">
            <Link to="/">
              <img src={Logo} className="Logo" alt="Logo" />
            </Link>
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            <ul className={isMenuOpen ? "menu-open" : ""}>
              <li>
                <ScrollLink to="quem-somos-section" smooth={true} duration={1000}>Quem Somos</ScrollLink>
              </li>
              <li>
                <ScrollLink to="projetos-section" smooth={true} duration={1000} offset={523}>Nossos Projetos</ScrollLink>
              </li>
              <li>
                <ScrollLink to="noticias-section" smooth={true} duration={1000}>Redes Sociais</ScrollLink>
              </li>
              <li className="doe-btn">
                <ScrollLink to="doacao-section" smooth={true} duration={1000} className="Doe-agora">Doe Agora!</ScrollLink>
              </li>
            </ul>
          </div>
          
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