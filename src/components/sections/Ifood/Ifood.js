import React from "react";
import './Ifood.css';
import imagemIfood from '../../images/ifood.png';
import whatsapp from '../../images/whatsapp.png';
import entregador from '../../images/entregador.png';
import logoEntrega from '../../images/logo-entrega.png';

const Ifood = () => {

    return(
        <section className='ifood' >
            <div className="container-ifood">
                <div className="titulo-ifood">
                    <img src={logoEntrega}/>
                    <h1>Peça agora um SULTAN</h1>
                    <img src={logoEntrega}/>
                </div>

                <div className="container-ifood-imagem-frase">
                    <div className="container-escrita-ifood">
                        <h2>Aberto TODOS OS DIAS das 18h às 00h.</h2>
                        <h3>Atendemos por iFood e WhatsApp toda a região de Balneário Camboriú e Camboriú.</h3>
                    </div>
                    <div className="entregador-logo"><img src={entregador}/></div>
                    <div className="container-imagem">
                        <a  href="https://www.ifood.com.br/delivery/balneario-camboriu-sc/sultan-food-centro/3314e130-a012-491d-9dc3-cbb1a145ed80" target='_blank'><img className="logo-ifood" src={imagemIfood}/></a>
                        <a  href="https://api.whatsapp.com/send/?phone=5547996967912&text&type=phone_number&app_absent=0" target="_blank" ><img className="logo-whatsapp" src={whatsapp}/></a>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Ifood;