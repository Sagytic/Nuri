import React, { useState } from "react";
import axios from 'axios';
import server from "../../API/server";
import Editor from "@monaco-editor/react";
import { AiOutlineCopy } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import "./MathIde.css";

function MathIde({ theme, toggle }) {
  const API_BASE_URL = server.BASE_URL;
  const API_Judge_URL = server.Judge_URL;
  var nuriCode, input;
  const [result, setResult] = useState(null);
  const [javaCode, setJavaCode] = useState(null);

  const encode = (str) => {
    return btoa(unescape(encodeURIComponent(str)));
  }

  const decode = (bytes) => {
    var escaped = escape(atob(bytes));
    try {
      return decodeURIComponent(escaped);
    } catch {
      return unescape(escaped);
    }
  }

  function copy() {
    const text = window.copyToCode;
    navigator.clipboard.writeText(text);
    alert('코드를 복사했습니다!');
  }

  function run() {
    console.log(input);
    var encodeNuriCode = encode(javaCode);
    var encodeInput = encode(input);
    var data = {
      source_code: encodeNuriCode,
      language_id: 62,
      stdin: encodeInput,
      compiler_options: "",
      command_line_arguments: "",
      redirect_stderr_to_stdout: true
    }
    axios
      .post(API_Judge_URL + '/submissions?base64_encoded=true&wait=true',
        data,
        {
          Headers: {
              contentType: "application/json"
          }
        })
      .then((res) => {
        console.log(javaCode);
        console.log(decode(res.data.stdout));
        setResult(decode(res.data.stdout));
      })
  }

  function nuriCodeHandler(e) {
    var data = {
      id:"",
      mathGameId:"",
      userCode:e
    }
    axios
    .post(API_BASE_URL + "/api/v1/console/convert",
    data,{
      Headers:{
        contentType: "application/json"
      }
    })
    .then((res)=>{
      setJavaCode(res.data);
    })
  }
  
  return (
    <>
      <div className="MathIde-item">
        <div className="MathIde-item-header">
          <div style={{ textDecoration: "underLine 5px"}}>누리 코드</div>
          <div className="MathIde-item-button-group">
            <AiOutlineCopy className="MathIde-item-icon" size="30" onClick={() => copy()}/>
            <BiSave className="MathIde-item-icon" size="30" />
            <button className="MathIde-item-button" onClick={run}>RUN</button>
          </div>
        </div>
        <div className={"MathIde-item-content " + (toggle ? "" : "toggle-off")}>
          <Editor
            id="nuriCode"
            height="30vh"
            defaultLanguage="java"
            defaultValue=""
            theme={theme}
            value={nuriCode}
            onChange={nuriCodeHandler}
          />
        </div>
      </div>

      <div className="MathIde-item">
        <div className="MathIde-item-header" style={{ textDecoration: "underLine 5px"}}>자바 코드</div>
        <div className={"MathIde-item-content " + (toggle ? "" : "toggle-off")}>
          <Editor
            id="javaCode"
            height="30vh"
            defaultLanguage="java"
            defaultValue=""
            theme={theme}
            value={javaCode}
          />
        </div>
      </div>

      <div className="MathIde-item">
        <div className="MathIde-item-header" style={{ textDecoration: "underLine 5px"}}>실행 결과</div>
        <div className={"MathIde-item-content " + (toggle ? "" : "toggle-off")}>
          <Editor
            id="result"
            height="30vh"
            defaultLanguage="java"
            defaultValue=""
            theme={theme}
            value={result}
          />
        </div>
      </div>
    </>
  );
}

export default MathIde;