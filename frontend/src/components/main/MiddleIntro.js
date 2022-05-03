import React from 'react';
import "./MiddleIntro.css"

function MiddleIntro() {

  const testImg = process.env.PUBLIC_URL + "/logo192.png"

  return (
  <div className="Middle-Contents">
    <img src={testImg} alt="block code"/>
    <img src={testImg} alt="korean code"/>
    <img src={testImg} alt="text code"/>
    
    <p>블록코드와 한글코드의 차이와 누리의 장점을 소개하는 멘트 배민식멘트</p>
    <p>실용성 / 확장성</p>
    <p>텍스트코드로 넘어가기 비교적 쉽다.는 느낌</p>
    
    <p>블록코드와 한글코드의 차이와 누리의 장점을 소개하는 멘트 배민식멘트</p>
    <p>실용성 / 확장성</p>
    <p>텍스트코드로 넘어가기 비교적 쉽다.는 느낌</p>

    <p>블록코드와 한글코드의 차이와 누리의 장점을 소개하는 멘트 배민식멘트</p>
    <p>실용성 / 확장성</p>
    <p>텍스트코드로 넘어가기 비교적 쉽다.는 느낌</p>


  </div>
  )
}

export default MiddleIntro;