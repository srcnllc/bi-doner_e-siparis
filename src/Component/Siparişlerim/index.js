import React, { useContext, useEffect } from 'react'
import './Siparişlerim.css'
import {Context} from '../Context/SiteContext'

function Siparişlerim() {
 const{sipariş,setSipariş}=useContext(Context)

  useEffect(()=>{
    const data1 = JSON.parse(localStorage.getItem('sipariş'));
    setSipariş(data1);
  },[setSipariş]);

  const removeItem = (index) => {
    sipariş.splice(index,1);
    localStorage.setItem('sipariş',JSON.stringify(sipariş));
    setSipariş([...sipariş])
  }

  if(localStorage===null || (sipariş.length!==0)){
    return (
      <div>
        {sipariş.map((i,index)=>{
          return (
          <div className="card" key={index}>
            <>
              <p>{`Merhaba ${i.firstname} siparişiniz aldık.En kısa sürede adresinize ulaştıracağız.`}</p>
              <p>{`Sipariş detayı : ${i.seçim} - ${i.soğan} - ${i.ketcapMayonez} - ${i.ekistek}`}</p>
              <p>{`Sipariş Adresi : ${i.addres}`}</p>
            </>
            <div className='remove'>
                <button onClick={removeItem}>Siparişi Sil</button>
              </div>
          </div>)
        })}
      </div>)
      }
    else{
      return(
        <div className='siparişyok'>
          Girilen bir sipariş yoktur...
        </div>
    )}

}

export default Siparişlerim