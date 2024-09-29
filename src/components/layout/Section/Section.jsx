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
                <p>Fundado em 2020 por um grupo de pesquisadores do Rio Grande do Sul, nosso instituto liderou o primeiro ensaio clínico adaptativo multiplataforma do Brasil, focado em medicamentos promissores no tratamento inicial da COVID-19. Utilizando metodologias inovadoras e ferramentas modernas de pesquisa, o ensaio ganhou reconhecimento mundial por suas contribuições significativas.</p>
                <p>Hoje, seguimos esse legado, aplicando o modelo de pesquisa em agravos agudos e crônicos que afetam a saúde pública, especialmente na atenção primária. Nosso objetivo é desenvolver projetos que promovam o acesso universal aos cuidados de saúde e melhorem a qualidade de vida da população.</p>
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
                        <p>Desenvolvemos projetos de pesquisa focados em solucionar problemas de saúde na atenção primária, visando garantir o acesso universal aos cuidados em saúde.</p>
                    </div>
                </div>
            </div>
            </div>
    );
}
