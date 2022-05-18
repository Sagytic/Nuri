import React from "react";
import "./SaveModal.css";

function SaveModal({ isSuccess, saveOff }) {
  return (
    <div className="SaveModal-bg">
      <div className="SaveModal">
        <h3>코드를 저장할 제목을 입력하세요</h3>
        <div>{isSuccess ? "정답코드" : "오답코드"}</div>
        <input />
        <div className="AnswerModal-button-group">
          <button className="AnswerModal-button-cancel" onClick={() => saveOff()}>돌아가기</button>
          <button className="AnswerModal-button">답안보기</button>
        </div>
      </div>
    </div>
  )
}

export default SaveModal;