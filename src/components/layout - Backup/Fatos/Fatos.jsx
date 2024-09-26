import React from "react";
import "./Fatos.css"
export default function Fatos(){
    return(
        <div className="container-fatos">
            <div className="box-fatos">
            <section class="fatos-fundacao">
                <h2>Fatos da Fundação</h2>
                <div class="fatos-container">
                    <div class="fato">
                        <h3>10<span>mil</span></h3>
                        <p>Pessoas na fase inicial</p>
                    </div>
                    <div class="fato">
                        <h3>2<span>mil</span></h3>
                        <p>Crianças beneficiadas</p>
                    </div>
                    <div class="fato">
                        <h3>5</h3>
                        <p>Anos de Duração</p>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}