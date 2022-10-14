import React from "react";
import { SliderData } from './SliderNarguile/SliderData';
import { EssenciaData } from './SliderEssencia/EssenciaData';
import ImageSlider from './SliderNarguile/ImageSlider';
import EssenciaSlider from './SliderEssencia/EssenciaSlider';
import narguile from '../../images/narguile.png';
import './narguile.css';

const Narguile = () =>{

    const inverter={
        transform:'scaleX(-1)'
      }
      
    return(
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
    )
}

export default Narguile