import React from "react";
import "./Page.css";
import metadata from "../../data/metadata.json";

const NavBar = () => {
  return (
    <div className="page">
      <div className="left-side">
        <div className="title">Sample Sound</div>
        <div className="card">
          <div className="card-image">
            <img
              className="img-container"
              src="https://i.scdn.co/image/ab67616d0000b273d53ff239ccefe81d5d8b2cee"
              alt=""
            />
            <img
              className="img-button"
              src={require("../../img/play-button.png")}
              alt=""
            />
          </div>
          <div className="card-image">
            <img
              className="img-container"
              src="https://i.scdn.co/image/ab67616d0000b273d53ff239ccefe81d5d8b2cee"
              alt=""
            />
            <img
              className="img-button"
              src={require("../../img/play-button.png")}
              alt=""
            />
          </div>
          <div className="card-image">
            <img
              className="img-container"
              src="https://i.scdn.co/image/ab67616d0000b273d53ff239ccefe81d5d8b2cee"
              alt=""
            />
            <img
              className="img-button"
              src={require("../../img/play-button.png")}
              alt=""
            />
          </div>
        </div>
        <div className="feature">
          <div className="feature-title">Feature Platform</div>
          <ul className="check-list">
            <li>Mendownload music</li>
            <li>Mendengarkan music</li>
            <li>Jasa rekaman</li>
            <li>Publish lagu</li>
          </ul>
        </div>
      </div>
      <div className="right-side">
        <div className="title-right">Harga Layanan</div>
        <div className="card">
          <div className="card-price">
            <div className="card-price-title">Pribadi</div>
            <div className="card-price-desc">Anda dapat mendownload lagu</div>
            <div className="card-price-price">0 koin / bulan</div>
            <div className="card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
          <div className="card-price">
            <div className="card-price-title">Komersial</div>
            <div className="card-price-desc">
              Anda dapat request lagu anda dan mendownload lagu
            </div>
            <div className="card-price-price">500 koin / bulan</div>
            <div className="card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
          <div className="card-price">
            <div className="card-price-title">Perusahaan</div>
            <div className="card-price-desc">
              Anda dapat request lagu anda atau mendownload lagu dengan lisensi
            </div>
            <div className="card-price-price">2000 koin</div>
            <div className="card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
        </div>
        <div className="title-right">Harga Koin</div>
        <div className="card">
          <div className="card-price">
            <div className="card-price-price">Rp. 10.000,00/90 koin</div>
            <div className="card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
          <div className="card-price">
            <div className="card-price-price">Rp. 20.000,00/200 koin</div>
            <div className="card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
          <div className="card-price">
            <div className="card-price-price">Rp. 45.000,00/500 koin</div>
            <div className="card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
        </div>
        <div className="make-account">
          <h2>Coba aplikasi gratis, </h2>
          <h2 className="make-account-button">buat akun</h2>
        </div>
        <div className="description-container">
          Dapatkan instrumen musuik tradisional hanya di Traditional Music
          Indonesia
        </div>
      </div>
    </div>
  );
};

export default NavBar;
