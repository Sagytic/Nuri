import React from "react";
import "./Problem.css"

function logProblem() {

    return (
    <div className="content">
        <div className="problemText">통나무 길이 구하기</div>
        <div className="problem">
            <p className="firstText" align="left">길이가 7m인 통나무를 똑같이 9도막으로 잘랐습니다</p>
            <p className="text" align="left">자른 도막의 한 길이를 구하는 코드를 작성 하세요.</p>
        </div>

        <div className="nuriCodeText">누리 코드 작성</div>
        <div className="nuriCode"></div>

        <div className="javaCodeText">자바 코드 작성</div>
        <div className="javaCode"></div>

        <div className="restText">결과</div>
        <div className="result"></div>
        
    </div>
    )
  }
  
  export default logProblem