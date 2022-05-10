import React from "react";
import TopCarousel from "../../components/main/TopCarousel";
import MiddleIntro from "../../components/main/MiddleIntro";
import GameList from "../../components/game/GameList";
import MathList from "../../components/math/MathList";
import NuriRefButtons from "../../components/main/NuriRefButtons";
import BottomCarousel from "../../components/main/BottomCarousel";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import "./Main.css"

// import Nav from './components/main/Nav';

// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'

function Main() {
  // scrollbar.init(document.querySelector('#smooth-scroll'));
  // <Scroll />

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="MainContainer">

      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>누리 😀</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>스크롤 페이드 아웃 ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>페이드 업 ⛅️</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>좌중</Animator>
              <Animator animation={MoveIn(1000, 0)}>우중</Animator> -그냥중
              <Animator animation={MoveOut(1000, 0)}>중우</Animator>
              <Animator animation={MoveOut(-1000, 0)}>중좌</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>마지막 페이드 아웃</span>
            <br/>
            <span style={{ fontSize: "30px" }}>
              서브타이틀
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>


      <TopCarousel />
      <MiddleIntro />
      <div className="Contents-title">
        <h2>누리랑 게임</h2>
      </div>
      <GameList />
      <div className="Contents-title">
        <h2>누리랑 수학문제</h2>
      </div>
      <MathList />
      <div className="Contents-title">
        <h2>누리 문법</h2>
      </div>
      <NuriRefButtons />
      <div className="Contents-title">
        <h2>한글 프로그래밍</h2>
      </div>
      <BottomCarousel />
    </div>
  )
}

export default Main