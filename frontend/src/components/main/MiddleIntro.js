import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Typical from 'react-typical'


import "./MiddleIntro.css"

function MiddleIntro() {

  const Img = process.env.PUBLIC_URL


  return (
  <div className="Middle-Contents">

    <div className="text-animation-container">
      <Typical
        steps={[
          '2,672,340', 1500, 
          '2021 전국 초등학교 학생 수.', 2100
        ]}
        loop={Infinity}
        wrapper="p"
      />
      <Typical
        steps={[
          '2015, 2024', 1500, 
          '초등학생 대상 코딩, AI교육 교과과정 도입 시기', 800
        ]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
    <div className="scroll-animation-container">

    </div>

    <div className="image-container">
      <Fade left>
        <img src={Img + '/img/nurirang_carousel1.png'} alt="block code"/>
      </Fade>
      <Zoom bottom>
        <img src={Img + '/img/nuriCode.PNG'} alt="korean code"/>
      </Zoom>
      <Fade right>
        <img src={Img + '/img/javaCode.PNG'} alt="text code"/>
      </Fade>
    <div className="code-alt-container">
      <span>블록 코드</span>
      <span>누리 코드</span>
      <span>Java 코드</span>
    </div>

    </div>

    <h2>누리는 프로그래밍 학습을 이해하기 쉽고 다가가기 쉬운</h2>
    <Typical
        steps={[
          '한글', 1500, 
          '누리코드', 2500
        ]}
        loop={Infinity}
        wrapper="h1"
      />
    <h2>로 할 수 있습니다.</h2>    


  </div>
  )
}

export default MiddleIntro;