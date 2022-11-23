import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/Header';
import Home from './Component/Home';
import Sipariş from './Component/SiparişVer';
import Siparişlerim from './Component/Siparişlerim';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/bi-doner_e-siparis/' element={<Home/>}/>
          <Route path='/bi-doner_e-siparis/siparişver' element={<Sipariş />} />
          <Route path='/bi-doner_e-siparis/siparişlerim' element={<Siparişlerim />} />
        </Routes>
      </Router>
  );
}

export default App;
