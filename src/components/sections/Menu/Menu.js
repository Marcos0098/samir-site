import React, { useState } from 'react';
import { MenuData } from './MenuData';
import chapeu from '../../images/chapeu-cozinheiro.png';
import cardapio from '../../images/menu.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Menu.css';

const Menu = ({ menus }) => {

    const[current, setCurrent] = useState(0);
    const tamanho = menus.length;
    
    const inverter={
        transform:'scaleX(-1)'
      }

    const menuShawarma = () => {
        setCurrent(current === null ? null : 0);
    }
    const menuXisA = () => {
        setCurrent(current === null ? null : 1);
    }

    const menuXisG = () => {
        setCurrent(current === null ? null : 2);
    }

    const Pratos = () => {
        setCurrent(current === null ? null : 3);
    }

    const Porcoes = () => {
        setCurrent(current === null ? null : 4);
    }

    const Individuais = () => {
        setCurrent(current === null ? null : 5);
        console.log(current);
    }

    const Combos = () => {
        setCurrent(current === null ? null : 6);
        console.log(current);
    }

    const Bebidas = () => {
        setCurrent(current === null ? null : 7);
        console.log(current);
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
                    <p onClick={menuShawarma}>Shawarma</p>
                    <p onClick={menuXisA}>Xis Árabe</p>
                    <p onClick={menuXisG}>Xis Gaúcho</p>
                    <p onClick={Pratos}>Pratos</p>
                    <p onClick={Porcoes}>Porções</p>
                    <p onClick={Individuais}>Individuais</p>
                    <p onClick={Combos}>Combos</p>
                    <p onClick={Bebidas}>Bebidas</p>
                </div>

                </div>
                    <div className='cardapio-selecionado'>
                        <img src={cardapio}/>

                        {MenuData.map((menu, numero) => {
                            return(
                                <section className='menu-cardapio'>
                                    
                                    <div className={numero === current ? 'cardapioo active' : 'cardapioo'} key={numero}>
                                        {numero === current && (<h2 className='titulo'>{menu.titulo}</h2>)}
                                        
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[0]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[0]}</p>)}
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[1]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[1]}</p>)}
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[2]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[2]}</p>)}
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[3]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[3]}</p>)}
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[4]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[4]}</p>)}
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[5]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[5]}</p>)}
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[6]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[6]}</p>)}
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[7]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[7]}</p>)}
                                        {numero === current && (<h3 className='sabor'>{menu.sabores[8]}</h3>)}
                                        {numero === current && (<p className='ingredientes'>{menu.ingredientes[8]}</p>)}
                                    </div>
                                    
                                </section>
                            )
                        })}
                        <div className='arrows'>
                            <div className='arrow-esquerda' id="ifood">
                                <FaArrowLeft className='seta-esquerda' onClick={PrevCardapio}/>
                            </div>
                            <div className='arrow-direita'>
                                <FaArrowRight className='seta-direita' onClick={NextCardapio}/>
                            </div>

                        </div>

                </div>
            </div>
            
      </section>

        )

}

export default Menu;