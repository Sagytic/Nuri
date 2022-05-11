import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Explain from "../../components/game/Explain";
import Result from "../../components/game/Result";
import Timer from "../../components/game/Timer";
import LinkGame from "../../components/game/LinkGame";
import WrongFindGame from "../../components/game/WrongFindGame";
import "./GameItem.css";

function GameItem() {

  const explainData = [
    {id: 0, title: "연결 게임", img: "/img/nurirang_carousel1.JPG", content: "모든 짝이 맞게 카드를 뒤집어주세요!"}
  ]

  const params = useParams().id;
  const navigate = useNavigate();
  const [start, setStart] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  const [timerEnd, setTimerEnd] = useState(false);
  const [explainShow, setExplainShow] = useState(true);
  const [resultShow, setResultShow] = useState(false);

  function startGame() {
    setTimerStart(true);
    setExplainShow(false);
  }

  function finishGame() {
    setTimerStart(false);
    setTimerEnd(true);
    setResultShow(true);
  }

  function restartGame() {
    setStart(start + 1);
    setTimerStart(true);
    setTimerEnd(false);
    setResultShow(false);
  }

  function moveAllGames() {
    navigate("/game");
    setExplainShow(true);
    setStart(0);
  }

  return (
    <div className="GameItem">
      {explainShow && 
        <Explain 
          data={explainData[params]}
          startGame={startGame}
          moveAllGames={moveAllGames}
        />
      }
      {resultShow && 
        <Result
          data={explainData[params]}
          restartGame={restartGame}
          moveAllGames={moveAllGames}
        />
      }
      <Timer data={explainData[params]} timerStart={timerStart} timerEnd={timerEnd} />
      {params === "0" && <LinkGame start={start} finishGame={finishGame} />}
      {params === "1" && <WrongFindGame />}
    </div>
  )
}

export default GameItem;