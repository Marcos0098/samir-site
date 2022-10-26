    import React from 'react';
    import './quemSomos.css';
    import logo from '../../images/logo-800x600_pretoEbranco.png';

    const QuemSomos = () =>{

        const inverter={
            transform:'scaleX(-1)'
          }

        return(
            <section className="quem_somos">
                        <div className="container_1">
                            <div className="box_quem_somos">
                            <div className="titulo_quem_somos">
                            <img src={logo}/>
                            <h1>Sultan</h1>

                            <img style={inverter} src={logo}/>
                            </div>
                                <p>Fundado em 2017, o restaurante Sultan oferece a melhor experiência da culinária Árabe de Balneário Camboriú.</p>
                            </div>
                        </div>
                    </section>

        )
    }



    
    export default QuemSomos;
