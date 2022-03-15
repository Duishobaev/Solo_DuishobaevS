import React from "react";
import "./Footer.css";
import Facebook from "../../assets/imagesFooter/Facebook.png";
import Instagram from "../../assets/imagesFooter/Instagram.png";
import Telegram from "../../assets/imagesFooter/Telegram.png";
import WhatsApp from "../../assets/imagesFooter/WhatsApp.png";
import { Link } from "react-router-dom";

import logo from "../../assets/logo1.png";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";

const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <p class="footer-links">
            <Link className="teg_a" to="/">
              Главная
            </Link>

            <Link className="teg_a" to="/products">
              Программы
            </Link>

            <Link className="teg_a" to="/contacts">
              Отзывы
            </Link>

            <Link className="teg_a" to="/products">
              Абонементы
            </Link>
          </p>

          <p class="footer-company-name">
            Образовательно-детский центр "БАЛАЖАН" © 2022
          </p>
        </div>

        <div class="footer-center" style={{}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "25px",
            }}
          >
            <p style={{ fontSize: "2.5vh" }}>
              <span style={{ fontSize: "2.5vh", color: "#1f1d1d" }}>
                Манас-Ата 4
              </span>
              г.Исфана
            </p>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "5px",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <span style={{ color: "#1f1d1d" }}>+(996) 500 80 78 90</span>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "5px",
              alignItems: "center",
            }}
          ></div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about" style={{ marginTop: "25px" }}>
            <span>Мы в соц.сетях</span>
          </p>

          <div className="icon_elem">
            <a href="https://www.instagram.com/" class="card">
              <img src={Instagram} alt="" />
            </a>
            <Link to="https://ru-ru.facebook.com/" class="card1">
              <img src={Facebook} alt="" />
            </Link>

            <Link to="https://web.telegram.org/k/" class="card4">
              <img src={Telegram} alt="" />
            </Link>
            <Link to="https://www.whatsapp.com/" class="card5">
              <img src={WhatsApp} alt="" />
            </Link>
          </div>
        </div>
        <div className="finalfoot">
          Разработка сайта: seyitbekaigu@gmail.com © 2022.
          <br /> Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
