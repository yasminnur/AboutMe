import React from "react";
import "./css/tentangSaya.css";
import { opentab } from "./scripts";

class tentangSaya extends React.Component {
  render() {
    return (
      <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
          <img src="/foto/yasmin.jpeg" alt="" ></img>
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
                Saya Yasmin Nur Azmina dari jurusan RPL. ini adalah web personal saya. Jika anda ingin megetahui saya lebih dekat,
                anda bisa melihat-lihat web ini. 
            </p>
              <div className="tab-titles">
              <p className="tab-links active-link" onClick={(event) => {opentab(event, 'education')}}>Education</p>
              <p className="tab-links" onClick={(event) => {opentab(event, 'skills')}}>Skills</p>
            </div>

            <div className="tab-contents active-tab" id="education">
              <ul>
                <li>
                  <span>SD</span>
                  <a href="https://goo.gl/maps/8s9pav8XBVoqsGMt6" target="_blank" rel="noreferrer"><p>SDIT Nurul Fikri Sidoarjo</p></a>
                </li>
                <li>
                  <span>SMP</span>
                  <a href="https://goo.gl/maps/LWzT9Z96W3RT7zd66" target="_blank" rel="noreferrer"><p>SMPIT Darul Fikri Sidoarjo</p></a>
                </li>
                <li>
                  <span>SMA</span>
                  <a href="https://goo.gl/maps/Ag6hoPjGmutKixPa8" target="_blank" rel="noreferrer"><p>SMK Telkom Malang</p></a>
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="skills">
              <ul>
                <li>
                  <span>3D</span><p>Bisa menggunakan blender dan unity</p>
                </li>
                <li>
                    <span>Service</span><p>Memperbaiki barang dengan kerusakan ringan</p>
                </li>
                <li>
                    <span>Sertifikat</span><br></br>
                    <a href="https://drive.google.com/drive/folders/1C7dToIc7Qf2JOx21dwsV3c0jTYNDBH9V?usp=sharing" target="_blank" rel="noreferrer"><p>Lihat sertifikatku</p></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default tentangSaya;
