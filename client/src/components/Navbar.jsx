import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import Arrow from "../img/Arrow.png";
import Global from "../img/Global.png";
import MenuIcon from "../img/MenuIcon.png";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(null);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="로고이미지" />
        </div>
        <div className="links">
          <Link
            className="link"
            to=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h4>ABOUT</h4>
            {isDropdownVisible && <DropdownMenu />}
          </Link>
          <Link className="link" to="">
            <h4>WHAT WE DO</h4>
          </Link>
          <Link className="link" to="">
            <h4>EXPERTISE</h4>
          </Link>
          <Link className="link" to="">
            <h4>HOW TO</h4>
          </Link>
          <Link className="link" to="">
            <h4>INSIGHT</h4>
          </Link>
          <Link className="link" to="">
            <h4>EVENT</h4>
          </Link>
          <h4>|</h4>
          <div className="right-wrap">
            <Link className="link program" to="">
              <h4>EX감성 프로그램</h4>
              <img
                className="arrow-icon program"
                src={Arrow}
                alt="우측상향화살표"
              ></img>
            </Link>
            <button className="application-btn">상담신청</button>
            <img className="nav-icon" src={Global} alt="언어변경아이콘"></img>
            <Link className="link">
              <img className="nav-icon" src={MenuIcon} alt="메뉴바아이콘"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
