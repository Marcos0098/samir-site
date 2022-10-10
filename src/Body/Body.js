import React from 'react';
import './Body.css';
import { useState } from 'react';
import { SliderData } from '../components/SliderNarguile/SliderData';
import { EssenciaData } from '../components/SliderEssencia/EssenciaData';
import { MenuData } from '../components/Menu/MenuData';
import externa from '../components/images/parte_externa.png';
import interna from '../components/images/parte_interna.png';
import house from '../components/images/arab_house.png';
import logo from '../components/images/logo-800x600_pretoEbranco.png';
import narguile from '../components/images/narguile.png';
import ImageSlider from '../components/SliderNarguile/ImageSlider';
import EssenciaSlider from '../components/SliderEssencia/EssenciaSlider';
import Menu from '../components/Menu/Menu';
import Ifood from '../components/Ifood/Ifood';
import Rodape from '../components/Rodape/Rodape';
function Body() {

  const [menuSelecionado, setMenuSelecionado] = useState(0);

  const inverter={
    transform:'scaleX(-1)'
  }

  return (

    <div className="body">


        <section className="quem_somos">
            <div className="container_1">
                <div className="box_quem_somos">
                  <div className="titulo_quem_somos">
                  <img src={logo}/>
                  <h2>Sultan</h2>

                  <img style={inverter} src={logo}/>
                  </div>

                    <p>Fundado em 2017, o restaurante Sultan oferece a melhor experiência da culinária Árabe e Gaúcha de Balneário Camboriú. Por isso convidamos a todos que experimentem o melhor tempero Árabe da cidade diretamente do restaurante Sultan.  </p>
                </div>
            </div>
        </section>

        <section className="local" id='local'>
          <div className="restaurante">
              <div className="titulo_restaurante">
              <img src={house}/>
              <h2>Conheça nosso restaurante</h2>
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

        <section className="narguile" id='narguile'>
          <div className="nargas">
            <div className="titulo_narguile">
              <img src={narguile}/>
              <h2>Experimente o melhor do Narguile</h2>
              <img style={inverter} src={narguile}/>
            </div>
            <div className="container_narguile">

              <ImageSlider slides={SliderData}/>
             
              <EssenciaSlider slides={EssenciaData}/>
            </div>

          </div>

        </section>

        <Menu menus={MenuData}/>

        <Ifood/>

        <Rodape/>
    </div>
  );
}
export default Body;