import React from "react";
import TopCarousel from "../../components/main/TopCarousel";
import MiddleIntro from "../../components/main/MiddleIntro";
import GameList from "../../components/game/GameList";
import MathList from "../../components/math/MathList";
// import NuriRefButtons from "../../components/main/NuriRefButtons";
// import BottomCarousel from "../../components/main/BottomCarousel";

import "./Main.css"

// import Nav from './components/main/Nav';

// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'

function Main() {

  return (
    <div className="MainContainer">
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
      {/* <div className="Contents-title">
        <h2>누리 문법</h2>
      </div>
      <NuriRefButtons />
      <div className="Contents-title">
        <h2>한글 프로그래밍</h2>
      </div> */}
      {/* <BottomCarousel /> */}
    </div>
  )
}

export default Main