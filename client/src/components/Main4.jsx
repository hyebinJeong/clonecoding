// 사례 연구

import React from "react";

const Main4 = () => {
  return (
    <div className="main4-wrap">
      <div className="main4-container-wrap">
        <div className="main4-left">
          <span className="sub-title">EXPERTISE</span>
          <p className="main-title">사례 연구</p>
          <p className="title-explanation">
            빅데이터 분석, 심리학적 연구, 신경과학적 연구 등 다양한
            <br /> 과학적 방법을 활용하여 정확하고 신뢰할 수 있는 분석 결과를
            <br />
            제공합니다. 고객의 비즈니스 목표와 마케팅 목표를 명확하게
            <br /> 파악하고, 이에 맞는 최적의 뉴로 마케팅 솔루션을 설계합니다.
          </p>
          <button className="blue-btn">사례연구 보기 →</button>
        </div>
        <div className="main4-right">
          <img
            className="main4-right-img1"
            src="https://ex.kinkos.co.kr/images/main_contents_5_1-p-500.png"
            alt="EX감성 솔루션 활용 사례집 사진1"
          />
          <img
            className="main4-right-img2"
            src="https://ex.kinkos.co.kr/images/main_contents_5_2-p-500.png"
            alt="EX감성 솔루션 활용 사례집 사진2"
          />
        </div>
      </div>
    </div>
  );
};

export default Main4;
