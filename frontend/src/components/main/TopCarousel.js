import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./TopCarousel.css"

export default class SimpleSlider extends Component {
  
  render() {
    // carousel settings
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const testImg = process.env.PUBLIC_URL + "/logo192.png"

    return (
      <div className="CarouselContainer">
        <Slider {...settings}>
          <div className="slides">
            <div className="contents-text">
              <h2>누리 문법은 어떻게 되어 있을까?</h2>
              <p>문법을 각 카테고리 별로 보기 쉽게,</p>
              <p>예시 코드로 이해하기 쉽게</p>
              <p>누리 문법을 공부해 보세요</p>
              <button className="carousel-btn">살펴보기</button>
              <image src={testImg} />
            </div>
          </div>
          <div className="slides">
            <div className="contents-text">
              <h2>코딩을 게임으로 배울 수 있다고?</h2>
              <p>게임을 통해 학습하고</p>
              <p>배우는 시간을 가져보세요!</p>
              <p>멘트 준비중</p>
              <button className="carousel-btn">살펴보기</button>
            </div>
          </div>
          <div className="slides">
            <div className="contents-text">
              <h2>귀찮게 손으로 풀 필요가 없다고?</h2>
              <p>멘트 준비중</p>
              <p>멘트 준비중</p>
              <p>멘트 준비중</p>
              <button className="carousel-btn">살펴보기</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}