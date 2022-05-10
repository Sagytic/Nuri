import React from "react";
import styled from "@emotion/styled";
import { AiFillEye } from 'react-icons/ai';

function CodeList({ codeData }) {

  const CodeSet = styled.ul`
    width: 100%;
    display: flex;
    row-gap: 20px;
    padding-left: 0px;
    align-items: flex-start;
    column-gap: 2%;
    flex-wrap: wrap;
  `

  const CodeItem = styled.li`
    box-sizing: border-box;
    width: 32%;
    height: 200px;
    border-radius: 20px;
    border-style: solid;
    list-style: none;
    padding-left: 0px;
    transition: all 0.1s;
    &:hover {
      cursor: pointer;
      transform: translate(0%, -10px);
    }
    @media (max-width: 500px) {
      width: 100%
    }
  `
  
  const CodeImg = styled.img`
    box-sizing: border-box;
    padding: 20px 10px;
    width: 100%;
    height: 140px;
    border-style: none none solid;
    border-width: 2px;
  `

  const CodeContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0% 5%;
    justify-content: space-between;
    align-items: center;
  `

  const CodeButton = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-weight: bold;
  `

  return (
    <CodeSet>
      {codeData.map(( code ) => {
        return (
          <CodeItem key={code.title}>
            <CodeImg alt="게임/문제 썸네일 이미지" src={process.env.PUBLIC_URL + code.image}/>
            <CodeContent>
              <CodeButton>{code.title}</CodeButton>
              <CodeButton><AiFillEye size="25px" />{code.views}</CodeButton>
            </CodeContent>
          </CodeItem>
        )
      })}
    </CodeSet>
  )
}

export default CodeList;