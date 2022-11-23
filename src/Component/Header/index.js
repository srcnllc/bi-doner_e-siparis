import React from 'react'
import './header.css'
import { Link} from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
        <Link to='/bi-doner_e-siparis/'><h1>Bİ-DÖNER ...</h1></Link>
        <p>Bi-Döner Alabilirmiyim lütfen?</p>
        <ul>
            <Link to='/bi-doner_e-siparis/siparişver'><li className='siparişver'>Sipariş Ver</li></Link>
            <Link to='/bi-doner_e-siparis/siparişlerim'><li>Siparişlerim</li></Link>
        </ul>
    </header>
  )
}

export default Header   