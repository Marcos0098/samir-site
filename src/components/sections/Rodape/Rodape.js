import React from "react";
import './Rodape.css';
import LogoPrincipal from '../../images/logoFundo0.png';
import facebook from '../../images/facebook-logo.png';
import zap from '../../images/whatsapp.png';
import instagram from '../../images/instagram-logo.png';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { AiFillPhone } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
const Rodape = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAkTmHdqWi3T87GAqLjwLIG_gwr775nMB4"
      })
      const position = {
        lat:-26.993983,
        lng:-48.6297357
      }
    return(
        <section className="rodape">
            <div className="container-principal-rodape">
                <div className="imagem-principal">
                    <img src={LogoPrincipal}/>
                </div>
                <div className="contatos">
                    <div className="titulo-contatos">
                        <h1>Contato</h1>
                    </div>
                    <div className="dados-contato">
                        <p><IoLocationSharp/> <strong>Endereço:</strong> Rua 2400, 137 sala 04 Centro - Balneário Camboriú - SC</p>
                        <p><AiFillPhone/> <strong>Telefone:</strong> +55 (47) 996967912</p>
                        <p><MdEmail/> <strong>E-mail:</strong> cafeteriasultan@gmail.com</p>

                    </div>
                </div>
                    <div className="redes-sociais">
                        <div className="titulo-rede-sociais">
                            <h3>Nossas Redes</h3>
                        </div>
                        <div className="icone-rede-sociais">
                        <a  href="https://www.facebook.com/sultanfoodbc" target='_blank'><img className="logo-facebook" src={facebook}/></a>
                        <a  href="https://api.whatsapp.com/send/?phone=5547996967912&text&type=phone_number&app_absent=0" target='_blank'><img className="logo-whatsapp-rodape" src={zap}/></a>
                        <a  href="https://www.instagram.com/sultanfoodbc/" target='_blank'><img className="logo-instagram" src={instagram}/></a>
                        </div>
                    </div>
            </div>
            <div className="w33">
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{width: '100%', height: '100%'}}
                        center={position}
                        zoom={16}
                    >
                        <Marker 
                        position={position}
                        options={{
                            label: {
                                text: "Restaurante Sultan",
                                className: "texto-map",
                            },
                        }}
                        />
                    </GoogleMap>
                ) : <></>
                }
            </div>
        </section>
    )
}

export default Rodape;