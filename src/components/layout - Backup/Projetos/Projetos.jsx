import React from "react";
import "./Projetos.css"
import noticia1 from "../../../assets/noticia1.png"
import noticia2 from "../../../assets/noticia2.jpg"
export default function Projetos() {
    return(
        <>
        <div className="section-pj">
            <div className="container-projetos">
                <div className="header-pj">
                    <h2>Nossos Projetos</h2>
                </div>
                <div className="box-pj">
                    <div className="c1">
                        <div className="img-pj">
                            <img src={noticia1}/>
                        </div>
                            <div className="texto-pj">
                                <h2>Alimentando Sonhos</h2>
                                <h3>NUTRINDO O FUTURO E TRANSFORMANDO VIDAS</h3>
                                <p>Junte-se a nós nessa jornada de esperança e igualdade e contribua para melhorar o desenvolvimento infantil, gerar oportunidades de vida, emprego e renda. 
                                    Entenda como o projeto <span className="alimentando">Alimentando Sonhos</span> pode ser a chave para um futuro de possibilidades para crianças carentes. 
                                    Juntos podemos trazer esperanças e oportunidades.
                                </p>
                                <button className="btn-saiba">Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                    <div className="c2">
                        <div className="texto-pj">
                                <h2>Alimentando Sonhos</h2>
                                <h3>NUTRINDO O FUTURO E TRANSFORMANDO VIDAS</h3>
                                <p>Junte-se a nós nessa jornada de esperança e igualdade e contribua para melhorar o desenvolvimento infantil, gerar oportunidades de vida, emprego e renda. 
                                    Entenda como o projeto <span className="alimentando">Alimentando Sonhos</span> pode ser a chave para um futuro de possibilidades para crianças carentes. 
                                    Juntos podemos trazer esperanças e oportunidades.
                                </p>
                                <button className="btn-saiba2">Saiba Mais</button>
                        </div> 
                        <div className="img-pj2">
                            <img src={noticia2}/>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

