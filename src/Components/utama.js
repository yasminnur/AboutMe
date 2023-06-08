import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Beranda from './beranda';
import TentangSaya from './tentangSaya';
import Karya from './karya';
import Kontak from './MyFav';
import galery from './pages/Galery';
// import 'bootstrap/dist/css/bootstrap.css';


const Utama = () => (
    <Routes>
        <Route path='/' element={<Beranda/>} />
        <Route path='/tentangsaya' element={<TentangSaya/>} />
        <Route path='/karya' element={<Karya/>} />
        <Route path='c' element={<Kontak />} />
        <Route path="/gallery" element={galery}></Route>
    </Routes>
    
    
)


    
  

export default Utama;