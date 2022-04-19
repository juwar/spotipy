import React, { useState } from "react";
import "./Page.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const { handleClose, show } = props;
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="left-side">
        <div className="title">Sample Sound</div>
        <div className="co-card">
          <div className="co-card-image">
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
          <div className="co-card-image">
            <img
              className="img-container"
              src="https://i.scdn.co/image/ab67616d0000b27355fbe24143cbc9fecd22165f"
              alt=""
            />
            <img
              className="img-button"
              src={require("../../img/play-button.png")}
              alt=""
            />
          </div>
          <div className="co-card-image">
            <img
              className="img-container"
              src="https://mmc.tirto.id/image/2017/09/13/black-brothers-02--IST.jpg"
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
        <div className="co-card">
          <div className="co-card-price">
            <div className="co-card-price-title">Pribadi</div>
            <div className="co-card-price-desc">
              Anda dapat mendownload lagu
            </div>
            <div className="co-card-price-price">0 koin / bulan</div>
            <div className="co-card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
          <div className="co-card-price">
            <div className="co-card-price-title">Komersial</div>
            <div className="co-card-price-desc">
              Anda dapat request lagu anda dan mendownload lagu
            </div>
            <div className="co-card-price-price">500 koin / bulan</div>
            <div className="co-card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
          <div className="co-card-price">
            <div className="co-card-price-title">Perusahaan</div>
            <div className="co-card-price-desc">
              Anda dapat request lagu anda atau mendownload lagu dengan lisensi
            </div>
            <div className="co-card-price-price">2000 koin</div>
            <div className="co-card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
        </div>
        <div className="title-right">Harga Koin</div>
        <div className="co-card">
          <div className="co-card-price">
            <div className="co-card-price-price">Rp. 10.000,00/90 koin</div>
            <div className="co-card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
          <div className="co-card-price">
            <div className="co-card-price-price">Rp. 20.000,00/200 koin</div>
            <div className="co-card-price-detail">
              <a href="#">Selengkapnya</a>
            </div>
          </div>
          <div className="co-card-price">
            <div className="co-card-price-price">Rp. 45.000,00/500 koin</div>
            <div className="co-card-price-detail">
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
      <div>
        <Modal className="my-modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> navigate('/music')}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default NavBar;
