import React from "react";
import TentangSaya from "./tentangSaya";
import Karya from "./karya";
import Kontak from "./MyFav";
import Beranda from "./beranda";
import Footer from "./footer";
import "./css/style.css";

function Nav() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#tentangSaya">tentang saya</a>
            </li>
            <li>
              <a href="#myFav">My Fav</a>
            </li>
            <li>
              <a href="#karya">Karya</a>
            </li>
          </ul>
        </nav>

        <section id="home">
          <Beranda />
        </section>
        <section id="tentangSaya">
          <TentangSaya />
        </section>
        <section id="myFav">
          <Kontak />
        </section>
        <section id="karya">
          <Karya />
        </section>
        <section id="footer">
        <Footer />
        </section>
      </div>
    </>
  );
}

export default Nav;
