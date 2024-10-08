// Home페이지 text 숫자 카운팅하는 컴포넌트

import React, { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

const Counter = () => {
  // isVisible 상태 관리 hook
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트 mount시 isVisible true로 변경
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // useSpring 사용
  const { number } = useSpring({
    // 시작 값 (isVisible이 false일 때)
    from: { number: 0 },
    // 목표 값 (isVisible이 true일 때)
    number: isVisible ? 100 : 0,
    delay: 200,
  });

  return (
    <animated.span>
      {/* number 값을 정수로 반올림하여 표시 */}
      {number.to((n) => Math.round(n))}
    </animated.span>
  );
};

export default Counter;
