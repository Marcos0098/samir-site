import logo1 from '../images/logo.png';
import { useState } from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

import './Header.css';

function Header(){

const [active, setMode] = useState(false);

const ToggleMode = () => {
    setMode(!active);
};
    return(
        <div className="center">

            <div className="header">
                <div className="header_logo">
                    <a href=''><img src={logo1}/></a>
                </div>

                <div className="header_menu">
                <Anchor affix={false}>
                    <div className='flex-box'>
                        <Link href="#local" title="Restaurante" />
                        <Link href="#narguile" title="Narguile" />
                        <Link href="#cardapio" title="Nossos Pratos" />
                    </div>
                </Anchor>
                </div>

                <div className="pedido">
                <Anchor affix={false}>
                    <Link href="#ifood" title="Peça um Sultan!" />
                </Anchor>
                </div>

                <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                    <div className="hamburguer hamburguerIcon"/>
                </div>
            </div>

            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className='list'>
                    
                    <Anchor affix={false}>
                        <div className='estilizar-mobile'>
                        <ul className="listItems">
                           <li><Link href="#local" title="Restaurante" /></li>
                           <li><Link href="#narguile" title="Narguile" /></li>
                           <li><Link href="#cardapio" title="Nossos Pratos" /></li>
                           <li><Link href="#ifood" title="Peça um Sultan!" /></li>
                        </ul>
                        </div>

                    </Anchor>
                    
                </div>
            </div>
                
        </div>

    )


}


export default Header;