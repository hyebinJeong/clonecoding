import React from "react";
import Logowhite from "../img/Logowhite.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-content">
          <img className="footer-logo" src={Logowhite} alt="로고이미지" />
          <span>본점</span>
          <span>킨코스코리아(주)</span>
          <span>서울시 서초구 강남대로 291 남강빌딩 8층</span>
        </div>
        <div className="footer-content">
          <span className="footer-middle">EX감성 솔루션 담당자</span>
          <span>02-510-8875</span>
          <span>exsupport@kinkos.co.kr</span>
        </div>
        <div className="footer-content">
          <button className="ask-btn">문의하기 →</button>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-bottom">
        <span>© 2024 by kinkos. All rights reserved.</span>
        <span className="personal-info">개인정보 보호정책</span>
      </div>
    </footer>
  );
};

export default Footer;
