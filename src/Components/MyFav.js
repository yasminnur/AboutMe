import React from "react";
import "./css/kontak.css";

class MyFav extends React.Component {
  render() {
    return (
      <div class="sub-title">
        <h1>More About Me</h1>
        <div class="work-list">
          <div class="work">
            <img src="/foto/film.png" alt=""></img>
            <div class="layer">
              <h3>My Fav Film</h3>
              <ul>
                <li>Extreme Job</li>
                <li>DP</li>
                <li>The Commuter</li>
                <li>Move to Heaven</li>
                <li>18 Again</li>
                <li>Detective Conan</li>
              </ul>
            </div>
          </div>
          <div class="work">
            <img src="/foto/a.jpeg" alt=""></img>
            <div class="layer">
              <h3>My Fav Songs</h3>
              <ul>
                <li>My Pace</li>
                <li>Time Out</li>
                <li>Thank You</li>
                <li>Hold It In</li>
                <li>Hello Future</li>
                <li>Life Still Going On</li>
              </ul>
            </div>
          </div>
          <div class="work">
            <img src="/foto/minum.jpg" alt=""></img>
            <div class="layer">
              <h3>My Fav F and D</h3>
              <ul>
                <li>Es Teh</li>
                <li>Terong Balado</li>
                <li>Kerupuk</li>
                <li>Beng-beng</li>
                <li>Buah</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyFav;
