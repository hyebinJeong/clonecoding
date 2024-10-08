// 메뉴 컨텐츠 & 자료 다운로드

import React from "react";

const Main5 = () => {
  return (
    <div className="main5-wrap">
      <div className="main5-container-wrap">
        <div className="main5-top">
          <div className="main5-content-wrap">
            <span className="sub-title">CONTENTS</span>
            <span className="main-title">메뉴 컨텐츠 & 자료 다운로드</span>
            <span className="title-explanation">
              EX감성을 소개하는 세부적인 자료를 원하시나요?
            </span>
          </div>
          <div className="main5-btn-wrap">
            <button className="blue-btn">자료 다운로드</button>
          </div>
        </div>
        <div className="main5-bottom">
          <div className="main5-box">
            <h4 className="main5-title">HOW TO</h4>
            <h2>편의점 / 프랜차이즈 산업</h2>
            <h4 className="main5-explanation">
              EX감성은 편의점 또는 프랜차이즈 매장을 방문하는 소비자들의 인식,
              인상, 이해를 EX감...
            </h4>
            <h4 className="detail-btn">자세히 보기</h4>
          </div>
          <div className="main5-box">
            <h4 className="main5-title">INSIGHT</h4>
            <h2>매장 진열에 과학이 필요한 이유</h2>
            <h4 className="main5-explanation">
              매장에 새 상품이 들어오는 순간, 단순히 선반에 배치하는 것만으로는
              충분하지 않습니다...
            </h4>
            <h4 className="detail-btn">자세히 보기</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main5;
