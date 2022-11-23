import React from 'react'
import './home.css'
import kurye from '../../img/kurye1.png'
import etdürüm from '../../img/etdürüm.png'
import etekmek from '../../img/ekmeketdoner.png'
import tavukekmek from '../../img/TavukEkmek.png'
import tavukdürüm from '../../img/tavukdürüm.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import MovingComponent from 'react-moving-text'




function Home() {
    return (
        <div className='home'>
            <div className='img'>
                <motion.div
                    className="img"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                    }}>
                    <img src={kurye} alt="kurye" />
                </motion.div>
            </div>
            <div className='iste'>
                <div className='slogan'>
                    <MovingComponent
                        type="shakeMix"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="infinite"
                        fillMode="none">
                        <h2>Sen istersin</h2>
                        <h2>Lezzet sana gelir</h2>
                    </MovingComponent>

                </div>
                <div className='dönerimage'>
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <img src={etdürüm} alt="etdürüm" className='image' />
                    </motion.div>
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <img src={etekmek} alt="etekmek" className='image' />
                    </motion.div>
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <img src={tavukekmek} alt="tavukekmek" className='image' />
                    </motion.div>
                    <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 2.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <img src={tavukdürüm} alt="tavukdürüm" className='image' />
                    </motion.div>
                </div>
                <motion.div
                    className="buton"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <Link to='/bi-doner_e-siparis/siparişver' >Sipariş Ver</Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Home