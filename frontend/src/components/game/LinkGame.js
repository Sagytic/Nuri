import React, { useState } from "react";
import "./LinkGame.css";
import styled from "@emotion/styled";

function LinkGame() {

  const pairArray = [
    {id: 0, pair: 0, title: "정수"},
    {id: 1, pair: 0, title: "int"},
    {id: 2, pair: 1, title: "소수"},
    {id: 3, pair: 1, title: "double"},
    {id: 4, pair: 2, title: "최대"},
    {id: 5, pair: 2, title: "max"},
    {id: 6, pair: 3, title: "최소"},
    {id: 7, pair: 3, title: "min"},
  ]

  const [check, setCheck] = useState([]);
  const [wordShow, setWordShow] = useState([false, false, false, false, false, false, false, false]);

  const LinkItem = styled.div`
    width: 15vw;
    height: 15vw;
    border-radius: 15px;
    border-style: solid;
    border-color: black;
    color: ${props => props.show ? "black" : "white"};
    text-align: center;
    &:hover {
      cursor: pointer;
      border-color: gray;
    }
  `

  function checkPair() {
    const idx1 = check[0]
    const idx2 = check[1]
    const checkWordShow = [...wordShow];

    if (pairArray[idx1].pair === pairArray[idx2].pair) {
      checkWordShow[idx1] = true;
      checkWordShow[idx2] = true;
    } else {
      checkWordShow[idx1] = false;
      checkWordShow[idx2] = false;
    }

    setWordShow(checkWordShow);
    setCheck([]);
  }

  function changeShow(id) {
    if (!wordShow[id]) {
      const newWordShow = [...wordShow];
      newWordShow[id] = true;
      setWordShow(newWordShow);
      setCheck(check.concat(id));
    }
  }

  if (check.length === 2) {
    checkPair()
  }

  return (
    <div className="LinkGame">
      <h1>연결게임입니다</h1>
      <ul className="LinkGame-card-group">
        {pairArray.map((pairEle) => {
          return (
          <LinkItem 
            key={pairEle.id} 
            show={wordShow[pairEle.id]}
            onClick={() => changeShow(pairEle.id)}
          >
              {pairEle.title}
          </LinkItem>
          )
        })}
      </ul>
    </div>
  )
}

export default LinkGame;