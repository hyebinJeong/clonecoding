// EX감성 뉴스레터 구독

import React from "react";

const Main6 = () => {
  return (
    <div className="main6-wrap">
      <div className="main6-container">
        <div className="main6-left">
          <h1>EX감성 뉴스레터 구독</h1>
          <h2>놓칠 수 없는 최신 마케팅·디자인 인사이트!</h2>
          <h2>지금 무료로 받아보세요✨</h2>
        </div>
        <div className="main6-right">
          <h3>이메일 주소*</h3>
          <input
            className="email-input"
            type="text"
            placeholder="이메일을 입력해주세요"
          />
          <div className="agreement-check-wrap">
            <div className="agreement-check">
              <input className="main6-checkbox" type="checkbox" />
              <h4> (필수) 개인정보 수집 내용에 동의합니다.</h4>
            </div>
            <div className="agreement-check">
              <input className="main6-checkbox" type="checkbox" />
              <h4> (필수) 광고성 정보 수신에 동의합니다.</h4>
            </div>
            <button>구독 신청</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main6;
