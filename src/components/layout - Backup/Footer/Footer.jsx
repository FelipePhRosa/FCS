import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="container-footer">
            <div className="footer">
                <div className="redes">
                    <h2>Nossas Redes Sociais</h2>
                    <p>Siga-nos para atualizações, eventos e muito mais!</p>
                    <div className="icons">
                        <Link to={{ pathname: "https://www.instagram.com/ong_facaumacriancasonhar/" }} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </Link>
                        <Link to={{ pathname: "https://www.facebook.com/sua_pagina" }} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </Link>
                        <Link to={{ pathname: "https://twitter.com/sua_conta" }} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                        </Link>
                    </div>
                </div>

                <div className="info">
                    <h2>Contato</h2>
                    <p>E-mail: exemplo@ong.com | Telefone: (00) 1234-5678</p>
                    <p>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
                    <p>Horário: Seg - Sex: 9h - 17h</p>
                </div>
                
                <div className="links-uteis">
                    <h2>Desenvolvimento</h2>
                    <p className="developer-credit">
                        Desenvolvido por <a href="https://www.linkedin.com/in/felipeprosa/" target="_blank" rel="noopener noreferrer">Felipe Rosa</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
