import React from 'react';
import "./MiddleIntro.css"

function MiddleIntro() {

  const Img = process.env.PUBLIC_URL

  return (
  <div className="Middle-Contents">

    <div className="image-container">
      <img src={Img + '/img/nurirang_carousel1.png'} alt="block code"/>
      <img src={Img + '/img/nurirang_carousel1.png'} alt="korean code"/>
      <img src={Img + '/img/nurirang_carousel1.png'} alt="text code"/>
    </div>
  
    <h2>누리는 프로그래밍 학습을 이해하기 쉽고 다가가기 쉬운</h2>
    <h1>한글</h1>
    <h2>로 할 수 있습니다.</h2>    

    <div className="scroll-animation-container">
      <h2>2,672,340 </h2>
      <h3>2015, </h3>
      <h3>2024</h3>
    </div>
    <div className="scroll-animation-container">
      <h2>2021 전국 초등학교 학생 수 </h2>
      <h2>초등학생 대상 코딩, AI교육 정규교과과정 도입 시기</h2>
    </div>


  </div>
  )
}

export default MiddleIntro;