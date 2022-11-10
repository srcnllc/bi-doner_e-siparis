import React from 'react'
import './home.css'
import kurye from '../../img/kurye1.png'
import etdürüm from '../../img/etdürüm.png'
import etekmek from '../../img/ekmeketdoner.png'
import tavukekmek from '../../img/TavukEkmek.png'
import tavukdürüm from '../../img/tavukdürüm.png'
import { Link} from 'react-router-dom'


 
function Home() {
  return (
    <div className='home'>
        <div className='img'>
            <img src={kurye} alt="kurye"/>
        </div>
        <div className='iste'>
            <div className='slogan'>
                <h2>Sen istersin</h2>
                <h2>Lezzet sana gelir</h2>
            </div>
            <div className='dönerimage'>
                <img src={etdürüm} alt="kurye"/>
                <img src={etekmek} alt="kurye"/>
                <img src={tavukekmek} alt="kurye"/>
                <img src={tavukdürüm} alt="kurye"/>
            </div>
            <Link to='/siparişver' className="buton">Sipariş Ver</Link>
        </div>
    </div>
  )
}

export default Home