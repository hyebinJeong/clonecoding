import React from "react";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <div className="about">
        <h3>ABOUT</h3>
        <ul>
          <li>EX감성 배경</li>
          <li>EX감성 개요</li>
          <li>연구진 소개</li>
          <li>EX감성 비교</li>
        </ul>
      </div>
      <div className="what-we-do">
        <h3>WHAT WE DO</h3>
        <ul>
          <li>소비행동모델 프레임</li>
          <li>분석 컨설팅 서비스</li>
          <li>분석 프로그램 서비스</li>
        </ul>
      </div>
      <div className="expertise">
        <h3>EXPERTISE</h3>
        <ul>
          <li>브랜드 패키지 사례</li>
          <li>디스플레이 사례</li>
          <li>웹분석 사례</li>
        </ul>
      </div>
      <div className="how-to">
        <h3>HOW TO</h3>
        <ul>
          <li>매체별 분석방법</li>
          <li>업종별 분석방법</li>
          <li>부서별 분석방법</li>
        </ul>
      </div>
      <div className="insight">
        <h3>INSIGHT</h3>
        <ul>
          <li>무료체험 신청</li>
          <li>자료 다운로드</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
