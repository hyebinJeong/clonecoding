import React from "react";
import Counter from "../components/Counter";
import DownArrow from "../img/DownArrow.png";
import Main1 from "../components/Main1";
import Main2 from "../components/Main2";
import Main3 from "../components/Main3";
import Main4 from "../components/Main4";
import Main5 from "../components/Main5";
import Main6 from "../components/Main6";

const Home = () => {
  return (
    <div className="home-container">
      <div className="video-wrap">
        <video
          className="main-video"
          src="https://ex.kinkos.co.kr/storage/uploads/1718850275_1718262597_kinkos_main.mp4"
          muted="muted"
          autoPlay="autoplay"
        />
      </div>
      <div className="content-wrap">
        <span>지금의 마케팅</span>
        <div className="two-line">
          <span className="counter">
            <Counter />
          </span>
          <span>% </span>
          <span>효과적인가요?</span>
        </div>
        <span className="last-line">
          우리는 뇌과학과 AI 기술을 통해 디자인의 매출효과를 분석합니다.
        </span>
        <button className="solution-btn">EX감성 솔루션 보기 →</button>
        <img
          src={DownArrow}
          alt="아래화살표아이콘"
          className="downarrow-icon"
        />
      </div>
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
    </div>
  );
};

export default Home;
