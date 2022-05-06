import React from "react";
import CodeList from "./CodeList";
import "./Record.css";

function Record({ allCodeData, codeIdx, setCodeIdx }) {
  
  const challengedMathList = allCodeData.filter((code) => {
    return code.type === 1 && code.status === 0;
  })

  const solvedMathList = allCodeData.filter((code) => {
    return code.type === 1 && code.status === 1;
  })

  const challengedGameList = allCodeData.filter((code) => {
    return code.type === 0 && code.status === 0;
  })

  const solvedGameList = allCodeData.filter((code) => {
    return code.type === 0 && code.status === 1;
  })

  const practiceList = allCodeData.filter((code) => {
    return code.type === 2 && code.status === 1;
  })

  const codeArray = [
    {id: 0, title: "도전한 문제", content: challengedMathList},
    {id: 1, title: "해결한 문제", content: solvedMathList},
    {id: 2, title: "도전한 게임", content: challengedGameList},
    {id: 3, title: "해결한 게임", content: solvedGameList},
    {id: 4, title: "혼자 연습", content: practiceList},
  ]

  function changeCodeData(idx) {
    setCodeIdx(idx);
  }

  return (
    <div className="Record">
      <div className="Record-tag-group">
        {codeArray.map((codeEle) => {
          return (
          <div 
            key={codeEle.id} 
            className={codeIdx === codeEle.id ? "Record-tag-on" : "Record-tag"} 
            onClick={() => changeCodeData(codeEle.id)}
          >
            {codeEle.title} {codeEle.content.length}
          </div>)
        })}
      </div>
      <CodeList codeData={codeArray[codeIdx].content} />
    </div>
  )
}

export default Record;