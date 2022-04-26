import React from "react";
import { Wave } from "react-animated-text";

const landingAnimation = {
  display: "inline-block",
  marginBottom: "1em",
  padding: "2em 1em 1em 1em",
  width: "100%",
  fontSize: "1.5rem",
  textAlign: "center",
  backgroundImage: "url(/assets/korBack.jpg)",
  color: "white"
};

export const Wave1 = () => (
  <div style={landingAnimation}>
    <Wave text="누리는 프로그래밍 학습을" effect="verticalFadeIn" effectChange={1.0} delay={5.0} />
    <Wave text="이해하기 쉽고, 다가가기 쉬운" effect="verticalFadeIn" effectChange={1.0} delay={5.0} />
    <Wave text="'한글'로 할 수 있습니다" effect="verticalFadeIn" effectChange={0.5} delay={5.0} />
  </div>
);

export default Wave1