import React from 'react';
import './Body.css';
import { MenuData } from '../components/sections/Menu/MenuData';
import QuemSomos from '../components/sections/quemSomos/QuemSomos';
import Local from '../components/sections/local/Local';
import Narguile from '../components/sections/narguile/Narguile';
import Menu from '../components/sections/Menu/Menu';
import Ifood from '../components/sections/Ifood/Ifood';
import Rodape from '../components/sections/Rodape/Rodape';

function Body() {

  return (
    <div className="body">

      <QuemSomos/>

      <Local/>

      <Narguile/>

      <Menu menus={MenuData}/>

      <Ifood/>

      <Rodape/>
    </div>
  )
}
export default Body;