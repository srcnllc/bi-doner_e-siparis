import { createContext, useState } from "react";


export const Context = createContext()

const Provider = ({children})=>{
    const [firstname,setFirstname]=useState("")
    const [addres,setAddres]=useState("")
    const [tel,setTel]=useState("")
    const [soğan,setSoğan]=useState("")
    const [seçim,setSeçim]=useState("")
    const [ketcapMayonez,setKetcapMayonez]=useState("")
    const [ekistek,setEkistek]=useState("")
    const [sipariş,setSipariş]=useState([])
    
    const data={
        firstname,setFirstname,
        addres,setAddres,
        tel,setTel,
        soğan,setSoğan,
        seçim,setSeçim,
        ketcapMayonez,setKetcapMayonez,
        ekistek,setEkistek,
        sipariş,setSipariş
    }
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider