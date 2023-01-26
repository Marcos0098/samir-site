import React, { useState } from 'react';
import { MenuData } from './MenuData';
import chapeu from '../../images/chapeu-cozinheiro.png';
import IMGcardapio from '../../images/menu.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Menu.css';

const Menu = ({ menus }) => {

    const [current, setCurrent] = useState(0);
    const tamanho = menus.length;
    
    const inverter={
        transform:'scaleX(-1)'
    }

    const NextCardapio = () => {
        setCurrent(current === tamanho - 1 ? 0 : current + 1)
    }

    const PrevCardapio = () => {
        setCurrent(current === 0 ? tamanho - 1 : current - 1)
    }

    if(!Array.isArray(menus) || menus.length <=0){
        return null;
    }


    return(
        <section className='cardapio' id='cardapio'>
            <div className='titulo-cardapio'>
                <img src={chapeu}/>
                <h1>Confira nosso cardápio</h1>
                <img style={inverter} src={chapeu}/>
            </div>
                <div className='cardapio-container'>
                <div className='container-selecionar-cardapio'>
                    <div className='subtitulo-cardapio'>
                        <h2>Descubra um de nossos pratos</h2>
                    </div>
                <div className='selecionar-cardapio'>
                    {MenuData.map((menu, index) => <p onClick={() => setCurrent(index)}>{menu.titulo}</p>)}
                </div>

                </div>
                    <div className='cardapio-selecionado'>
                        <img src={IMGcardapio}/>
                        {MenuData.map((menu, index) => {

                            return(
                                <section className='menu-cardapio'>
                                    <div className={index === current ? 'cardapioo active' : 'cardapioo'} key={index}>
                                        {index === current && (<h2 className='titulo'>{menu.titulo}</h2>)}
                                        {index === current && (<h4>{menu.sabores[0]}</h4>)}
                                        {index === current && (<p>{menu.ingredientes[0]}</p>)}
                                        {index === current && (<h4>{menu.sabores[1]}</h4>)}
                                        {index === current && (<p>{menu.ingredientes[1]}</p>)}
                                        {index === current && (<h4>{menu.sabores[2]}</h4>)}
                                        {index === current && (<p>{menu.ingredientes[2]}</p>)}
                                        {index === current && (<h4>{menu.sabores[3]}</h4>)}
                                        {index === current && (<p>{menu.ingredientes[3]}</p>)}
                                        {index === current && (<h4>{menu.sabores[4]}</h4>)}
                                        {index === current && (<p>{menu.ingredientes[4]}</p>)}
                                        {index === current && (<h4>{menu.sabores[5]}</h4>)}
                                        {index === current && (<p>{menu.ingredientes[5]}</p>)}
                                        {index === current && (<h4>{menu.sabores[6]}</h4>)}
                                        {index === current && (<p>{menu.ingredientes[6]}</p>)}
                                        {index === current && (<h4>{menu.sabores[7]}</h4>)}
                                        {index === current && (<p>{menu.ingredientes[7]}</p>)}
                                    </div>
                                </section>
                            )
                        })}
                        <div className='arrows'>
                            <div className='arrow-esquerda' >
                                <FaArrowLeft className='seta-esquerda' onClick={PrevCardapio}/>
                            </div>
                            <div className='arrow-direita' >
                                <FaArrowRight className='seta-direita' onClick={NextCardapio}/>
                            </div>

                        </div>

                </div>
            </div>
            
      </section>

        )

}

export default Menu;