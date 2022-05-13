import React from "react";
import "./Result.css";

function Result({ data, restartGame, moveAllGames }) {

  return (
    <div className="Result-bg">
      <div className="Result">
        <h1>{data.title} 클리어!!</h1>
        <div>랭킹</div>
        <div>내 등수는 --등입니다</div>
        <div className="Result-button-group">
          <button className="Result-button" onClick={() => moveAllGames()}>다른 게임 하기</button>
          <button className="Result-button" onClick={() => restartGame()}>다시하기</button>
        </div>
      </div>
    </div>
  )
}

export default Result;