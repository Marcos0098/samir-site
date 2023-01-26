import React from "react";
import './local.css';
import externa from '../../images/parte_externa.png';
import interna from '../../images/parte_interna.png';
import house from '../../images/arab_house.png';

const Local = () =>{

    return(
        <section className="local" id='local'>
          <div className="restaurante">
              <div className="titulo_restaurante">
              <img src={house}/>
              <h1>Conheça nosso restaurante</h1>
              <img src={house}/>
              </div>
            <div className="container_restaurante">
              <div className="imagem_restaurante">
                <img style={{opacity:'0.8'}} src={interna}/>
                <img src={externa}/>
              </div>
              <div className="box_restaurante">
                <p>Disponibilizamos de uma área externa para apreciar um bom narguile com o ar fresco da praia de Balneário Camboriú.</p>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Local;