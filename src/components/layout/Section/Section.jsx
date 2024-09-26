import React from "react";
import crianca from "../../../assets/teste31.jpg";
import "./Section.css";

export default function Section() {
    return (
        <div id="quem-somos-section" className="container-section">
            {/* Quem Somos Section */}
            <div className="box">
                <div className="conteudo">
                    <h1>Quem Somos</h1>
                    <p>Em 2020, um grupo de pesquisadores do estado de Minas Gerais desenvolveu o primeiro ensaio clínico adaptativo multiplataforma do Brasil, abordando diversos medicamentos promissores no tratamento inicial da COVID-19. Utilizando metodologia inovadora e modernas ferramentas de pesquisa, este ensaio tornou-se mundialmente reconhecido, com contribuições relevantes no tratamento inicial desta doença.</p>
                    <p>O modelo de pesquisa adotado mostrou-se viável para estudarmos importantes agravos agudos e crônicos que afetam a saúde da população, especialmente ao nível da atenção primária. Criamos este instituto com a missão de desenvolvermos projetos de pesquisa voltados para a abordagem dos problemas de saúde ao nível da atenção primária, com foco no acesso universal aos cuidados em saúde.</p>
                </div>
                <div className="conteudo2">
                    <img src={crianca} className="crianca" />
                </div>
            </div>

            {/* Nossos Projetos Section */}
            <div id="projetos-section" className="container-objetivo">
                <div className="box-obj">
                    <div className="conteudo-obj">
                        <h1>Nosso Objetivo</h1>
                        <p>Desenvolver projetos de pesquisa voltados para a abordagem dos problemas de saúde ao nível da atenção primária, com foco em um acesso universal aos cuidados em saúde.</p>
                    </div>
                </div>
            </div>
            </div>
    );
}
