import React, { useState } from "react";
import axios from "axios";
import server from "../../API/server";
import Editor from "@monaco-editor/react";
import { ToggleButton } from "@mui/material";
import "./UpDown.css";

function UpDown() {
    const API_BASE_URL = server.BASE_URL;
    const API_Judge_URL = server.Judge_URL;
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answer5, setAnswer5] = useState("");
    const [answer6, setAnswer6] = useState("");
    const [answer7, setAnswer7] = useState("");
    const [result, setResult] = useState(null);
    const [javaCode, setJavaCode] = useState(null);
    const [toggle, setToggle] = useState(true);
    const Image = process.env.PUBLIC_URL + "/img/updownproblem.PNG";
    var [theme, setTheme] = useState("vs-light");
    var nuriRandom = Math.floor(Math.random() * (100 - 1) + 1); // 1~100
    var nuriCode, input;

    const encode = (str) => {
        return btoa(unescape(encodeURIComponent(str)));
    };
    const decode = (bytes) => {
        var escaped = escape(atob(bytes));
        try {
            return decodeURIComponent(escaped);
        } catch {
            return unescape(escaped);
        }
    };
    function run() {
        input = nuriRandom;
        console.log("input : " + input);
        var encodeNuriCode = encode(javaCode);
        var encodeInput = encode(input);
        var data = {
            source_code: encodeNuriCode,
            language_id: 62,
            stdin: encodeInput,
            compiler_options: "",
            command_line_arguments: "",
            redirect_stderr_to_stdout: true,
        };
        console.log(javaCode);
        axios
        .post(
            API_Judge_URL + "/submissions?base64_encoded=true&wait=true",
        data,
        {
            Headers: {
                contentType: "application/json",
            },
        }
        )
        .then((res) => {
            console.log(javaCode);
            console.log(decode(res.data.stdout));
            setResult(decode(res.data.stdout));
        });
    }

    var answertmp1, answertmp2, answertmp3, answertmp4, answertmp5, answertmp6, answertmp7;
    function AnswerHandler(e) {
        console.log(e.target.id ,"이거출력");
        console.log(e.target.value, "타겟 벨류 출력")  // 구간반복
        // let answertmp1, answertmp2, answertmp3, answertmp4, answertmp5, answertmp6, answertmp7;
        if(e.target.id === "answer1") {
            //answer1 = e.target.value;
            answertmp1 = e.target.value;
            console.log("answertmp1",answertmp1);
            setAnswer1(answertmp1);  // 구간반보
            console.log("answer1", answer1);
        }
        else if(e.target.id === "answer2") {
            answertmp2 = e.target.value;
            setAnswer2(answertmp2);
        }
        else if(e.target.id === "answer3") {
            answertmp3 = e.target.value;
            setAnswer3(answertmp3);
        }
        else if(e.target.id === "answer4") {
            answertmp4 = e.target.value;
            setAnswer4(answertmp4);
        }
        else if(e.target.id === "answer5") {
            answertmp5 = e.target.value;
            setAnswer5(answertmp5);
        }
        else if(e.target.id === "answer6") {
            answertmp6 = e.target.value;
            setAnswer6(answertmp6);
        }
        else if(e.target.id === "answer7") {
            answertmp7 = e.target.value;
            setAnswer7(answertmp7);
        }
        
        nuriCode = `정수 누리랜덤값 = 입력해요.정수입력;
정수 시작 = 1;
정수 끝 = 100;
        
${answer1}(범위=0,10){
    정수 내예상값 = (시작 + ${answer2})/2;
    출력(내예상값);
            
    만약(내예상값 == ${answertmp3}){
        출력("성공");
        ${answertmp4}
    }아니면{
        만약(내예상값 ${answertmp5} 누리랜덤값){
            출력("다운");
            ${answertmp6} = 내예상값;
        }아니면{
            출력("업");
            ${answertmp7} = 내예상값;
        }
    }
}`;
        console.log(nuriCode);
        nuriCodeHandler(nuriCode);
    }

    function nuriCodeHandler(nuriCode) {
        var data = {
            id: "",
            mathGameId: "",
            userCode: nuriCode,
        };
        axios
        .post(API_BASE_URL + "/api/v1/console/convert", data, {
            Headers: {
            contentType: "application/json",
            },
        })
        .then((res) => {
            setJavaCode(res.data);
        });
    }

    function toggleClick() {
        setToggle((prev) => !prev);
    console.log(toggle);
    if (toggle) {
      setTheme("vs-dark");
    } else {
      setTheme("vs-light");
    }
  }

  return (
    <div className="Updown">
      <div className="Updown-content">
        정수인 숫자 1~100 사이 중에서 누리랑이 마음 속으로 정한 숫자를 10번 안에
        맞춰봐!
        <br />
        (단, 출력 결과에 UP, DOWN 여부와 숫자를 예측하는 과정을 보여줘야 성공할
        수 있다.)
      </div>
      <div className="Updown-game-image">
        <img src={Image} alt="updownCodeImage" />
        <input id="answer1" value={answer1} onChange={AnswerHandler} />
        <br />
        <input id="answer2" value={answer2} onChange={AnswerHandler} />
        <br />
        <input id="answer3" value={answer3} onChange={AnswerHandler} />
        <br />
        <input id="answer4" value={answer4} onChange={AnswerHandler} />
        <br />
        <input id="answer5" value={answer5} onChange={AnswerHandler} />
        <br />
        <input id="answer6" value={answer6} onChange={AnswerHandler} />
        <br />
        <input id="answer7" value={answer7} onChange={AnswerHandler} />
        <br />
      </div>
      <div>
        <button onClick={run}>코드제출</button>
      </div>

      <div>테마 설정</div>
      <ToggleButton onClick={toggleClick} toggle={toggle}></ToggleButton>
      <h3>{toggle ? "OFF" : "ON"}</h3>

      <div>자바 코드</div>
      <Editor
        id="javaCode"
        height="30vh"
        defaultLanguage="java"
        defaultValue=""
        theme={theme}
        value={javaCode}
      />

      <div>결과</div>
      <Editor
        id="result"
        height="30vh"
        defaultLanguage="java"
        defaultValue=""
        theme={theme}
        value={result}
      />
    </div>
  );
}
export default UpDown;