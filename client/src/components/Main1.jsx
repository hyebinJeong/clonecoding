// EX 감성소개, 진행 프로젝트 소개

import React from "react";
import main1backimg from "../img/main1backimg.png";

const Main1 = () => {
  return (
    <div className="main1-wrap">
      <div className="main1-container-wrap">
        <div className="main1-container1">
          <div className="main1-left1">
            <span className="sub-title">INTRODUCE</span>
            <p className="main-title">EX감성 소개</p>
          </div>
          <div className="main1-right1">
            <p>
              EX(explainable)감성은 소비자의 잠재 니즈를 뇌과학과 AI기술을 통해
              정량적으로 분석하는 솔루션입니다. 매출에 효과적인 마케팅 활동을
              위해 구매행동모델 (AIDMA 주목 · 흥미· 열정· 기억· 행동)의
              프레임으로 분석하고 제안합니다.
            </p>
            <button className="add-btn blue-btn">더보기 →</button>
          </div>
        </div>
        <div className="main1-container2">
          <div className="main1-container2-top1">
            <span className="sub-title">OUR PROJECT</span>
            <span className="main-title">진행 프로젝트 소개</span>
          </div>
          <div className="main1-container2-top2">
            <span className="title-explanation">
              매출에 효과적인 마케팅 활동을 위해 현장에서 가장 고민하는 주제로
              시작합니다.
            </span>
            <button className="blue-btn pj-add-btn">프로젝트 더보기 →</button>
          </div>

          <div className="main1-container2-bottom">
            <div className="main1-left2">
              <img
                src="https://images-ext-1.discordapp.net/external/Ju3hKoSLVALqlPP_losVUEt12LsznDDnroMLP_KArg8/https/ex.kinkos.co.kr/images/MainHome_Ourproject01.jpeg?format=webp&width=804&height=536"
                alt="마트이미지"
                className="main1-img"
              ></img>
              <span className="date">2023.08 ~</span>
              <span className="img-explanation">
                매장 판촉물 디자인의 매출 영향력 인과추정 분석
              </span>
            </div>
            <div className="main1-right2">
              <img
                src="https://images-ext-1.discordapp.net/external/gCcP44uze_YEmVvgUf8O1OjkvlZ7M4a6Q702LxoqdK4/https/ex.kinkos.co.kr/images/MainHome_Ourproject02.jpeg?format=webp&width=804&height=536"
                alt="화장품이미지"
                className="main1-img"
              ></img>
              <span className="date">2023.11 ~</span>
              <span className="img-explanation">
                패키지 디자인의 브랜드 연속성 분석
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
