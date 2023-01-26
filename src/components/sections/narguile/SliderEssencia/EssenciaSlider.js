import React, { useState } from 'react';
import { EssenciaData } from './EssenciaData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './essenciaSlide.css';

const EssenciaSlider = ({ slides }) => {

    const[currentEssencia, setCurrentEssencia] = useState(0);
    const tamanhoEssencia = slides.length;

    const nextSlide = () => {
      setCurrentEssencia(currentEssencia === tamanhoEssencia - 1 ? 0 : currentEssencia + 1);
      }
  
      const prevSlide = () => {
        setCurrentEssencia(currentEssencia === 0 ? tamanhoEssencia - 1 : currentEssencia - 1);
      }
  
      if(!Array.isArray(slides) || slides.length <=0){
        return null;
      }


      return(
        <section className='essencia-slider'>
            <FaArrowAltCircleLeft className='left-arrow-essencia' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow-essencia' onClick={nextSlide}/>
    
            {EssenciaData.map((slide, index) => {
                return(
          
                    <div className={index === currentEssencia ? 'essencia ativa' : 'essencia'} key={index}>
    
                    {index === currentEssencia && (<img src={slide.image} alt="essencia image" className='image-essencia' />)}
                    </div>
                )
                
            })}
        </section>
      )
}
export default EssenciaSlider;