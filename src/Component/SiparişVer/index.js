import React, { useContext } from 'react'
import './siparişver.css'
import etdürüm from '../../img/etdürüm.png'
import etekmek from '../../img/ekmeketdoner.png'
import tavukekmek from '../../img/TavukEkmek.png'
import tavukdürüm from '../../img/tavukdürüm.png'
import { Context } from '../Context/SiteContext'
import MovingComponent from 'react-moving-text'



function Sipariş() {
  const {
    firstname, setFirstname,
    addres, setAddres,
    tel, setTel,
    soğan, setSoğan,
    seçim, setSeçim,
    ketcapMayonez, setKetcapMayonez,
    ekistek, setEkistek,
    sipariş, setSipariş } = useContext(Context)

  const handlelocale = () => {
    setSipariş(
      [...sipariş, { firstname, addres, tel, soğan, seçim, ketcapMayonez, ekistek }]
    )
    let json = JSON.stringify(sipariş)
    localStorage.setItem("sipariş", json)
  }
  return (
    <div className='content'>
      <MovingComponent
        type="squeezeVertical"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none">
        <h2>Haydi dönerimizi özelleştirelim...</h2>
      </MovingComponent>
      <div className='spiaris'>
        <form className='form'>
          <div className='isim'>
            <label htmlFor="firstName">Sipariş Verenin Adınız Soyadı : </label>
            <input
              id="firstName"
              name="firstName"
              placeholder="İsim giriniz"
              autoComplete='off'
              onChange={(e) => { setFirstname(e.target.value) }} />
          </div>
          <div className='adress'>
            <label htmlFor="addres">Siparişinizi hangi adrese getirelim : </label>
            <textarea
              id="addres"
              name="addres"
              placeholder="Sipariş adresi giriniz"
              autoComplete='off'
              onChange={(e) => { setAddres(e.target.value) }} />
          </div>
          <div className='telefon'>
            <label htmlFor="tel">Size ulaşabilmek için telefon numaranız : </label>
            <input
              id="tel"
              name="tel"
              type="number"
              autoComplete='off'
              placeholder='0555 555 55 55'
              onChange={(e) => { setTel(e.target.value) }}
            />
          </div>
          <div className='dönersections'>
            <input type="image" src={etdürüm} alt="etdürüm" value="ET DÜRÜM" onClick={(e) => {
              e.preventDefault();
              setSeçim(e.target.alt)
            }} />
            <input type="image" src={etekmek} alt="etekmek" value="EKMEK ARASI ET" onClick={(e) => {
              e.preventDefault();
              setSeçim(e.target.alt)
            }} />
            <input type="image" src={tavukekmek} alt="tavukekmek" value="EKMEK ARASI TAVUK" onClick={(e) => {
              e.preventDefault();
              setSeçim(e.target.alt)
            }} />
            <input type="image" src={tavukdürüm} alt="tavukdürüm" value="TAVUK DÜRÜM" onClick={(e) => {
              e.preventDefault();
              setSeçim(e.target.alt)
            }} />
          </div>
          <div className="soğan">
            <label>
              <input
                type="radio"
                name="checked"
                value="Soğanlı"
                onChange={(e) => { setSoğan(e.target.value) }} />
              Soğanlı
            </label>
            <label>
              <input
                type="radio"
                name="checked"
                value="Soğansız"
                onChange={(e) => { setSoğan(e.target.value) }} />
              Soğansız
            </label>
            <label>
              <input
                type="radio"
                name="checked"
                value="Az soğanlı"
                onChange={(e) => { setSoğan(e.target.value) }} />
              Az soğanlı
            </label>
          </div>
          <div className="ketcapgroup">
            <label>
              <input
                type="radio"
                name="kchecked"
                value="Ketçap istiyorum"
                onChange={(e) => { setKetcapMayonez(e.target.value) }} />
              Ketçap istiyorum
            </label>
            <label>
              <input
                type="radio"
                name="kchecked"
                value="Mayonez istiyorum"
                onChange={(e) => { setKetcapMayonez(e.target.value) }} />
              Mayonez istiyorum
            </label>
            <label>
              <input
                type="radio"
                name="kchecked"
                value="Hem ketçap hem mayonez istiyorum"
                onChange={(e) => { setKetcapMayonez(e.target.value) }} />
              Hem ketçap hem mayonez istiyorum
            </label>
            <label>
              <input
                type="radio"
                name="kchecked"
                value="İstemiyorum"
                onChange={(e) => { setKetcapMayonez(e.target.value) }} />
              İstemiyorum
            </label>
          </div>
          <div className='ekistek'>
            <label htmlFor="ekistek">Ekstra eklemek istedikleriniz: </label>
            <textarea
              id="ekistek"
              name="ekistek"
              autoComplete='off'
              placeholder="Eklemek istediklerinizi yazınız"
              onChange={(e) => { setEkistek(e.target.value) }} />
          </div>
        </form>
        <div className='siparişiniz'>
          <h1>Tanımlanan Sipariş:</h1>
          <ul>
            <li>{seçim}</li>
            <li>{firstname}</li>
            <li>{addres}</li>
            <li>{tel}</li>
            <li>{soğan}</li>
            <li>{ketcapMayonez}</li>
            <li>{ekistek}</li>
          </ul>
          <button onClick={handlelocale}>Sİparişi Tamamla</button>
        </div>
      </div>
    </div>
  )
}

export default Sipariş