import React from 'react';
import '../Components/css/karya.css'
import "./scripts2";

function Karya() {
  return (
    <div id="karya">
      <div className="gallery">
        <div className="gallery-container">
          <img className="gallery-item gallery-item-1" src="/foto/denah3d.jpg" alt="" data-index="1"></img>
          <img className="gallery-item gallery-item-2" src="/foto/wallpaper.jpg" alt="" data-index="2"></img>
          <img className="gallery-item gallery-item-3" src="/foto/minicar.png" alt="" data-index="3"></img>
          <img className="gallery-item gallery-item-4" src="/foto/denah.jpg" alt="" data-index="4"></img>
          <img className="gallery-item gallery-item-5" src="/foto/lowpoly.jpeg" alt="" data-index="5"></img>
        </div>
        <div className="gallery-controls"></div>
      </div>
    </div>
    
  )
}

export default Karya;


