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
  const API_RAPID_URL = server.Rapid_URL;
  const API_RAPID_KEY = process.env.REACT_APP_RAPID_API;
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
    if (text === undefined) {
        alert("복사할 내용이 없습니다.")
    } else {
        navigator.clipboard.writeText(text);
        alert('코드를 복사했습니다!');
    }
}

  function run() {
    console.log(input);
    var data = {
      source_code: javaCode,
      language_id: 62,
      stdin: input,
    }
    // axios
    //   .post(API_Judge_URL + '/submissions?base64_encoded=true&wait=true',
    //     data,
    //     {
    //       Headers: {
    //           contentType: "application/json"
    //       }
    //     })
    //   .then((res) => {
    //     console.log(javaCode);
    //     console.log(decode(res.data.stdout));
    //     setResult(decode(res.data.stdout));
    //   })
    const options = {
      method: 'POST',
      url: API_RAPID_URL + '/submissions',
      params: {base64_encoded: 'false', fields: '*'},
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': API_RAPID_KEY
      },
      data
    };
    
    axios.request(options).then(function (response) {
        console.log(API_RAPID_KEY);
        console.log(response.data.token);
        const options = {
          method: 'GET',
          url: API_RAPID_URL + '/submissions/' + response.data.token,
          params: {base64_encoded: 'true', fields: '*'},
          headers: {
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
            'X-RapidAPI-Key': API_RAPID_KEY
          }
        };
        
        axios.request(options).then(function (response) {
            setResult(decode(response.data.stdout));
        }).catch(function (error) {
            console.error(error);
        });
    }).catch(function (error) {
        console.error(error);
    });
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