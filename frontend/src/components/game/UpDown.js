import React, { useEffect, useState } from "react";
import axios from "axios";
import server from "../../API/server";
import Editor from "@monaco-editor/react";
import { MdClose } from "react-icons/md";
import "./UpDown.css";

function UpDown({ start, finishGame }) {
    const API_BASE_URL = server.BASE_URL;
    const API_RAPID_URL = server.Rapid_URL;
    const API_RAPID_KEY = process.env.REACT_APP_RAPID_API;

    const defaultAnswer = [
        { id: 1, content: "" },
        { id: 2, content: "" },
        { id: 3, content: "" },
        { id: 4, content: "" },
        { id: 5, content: "" },
        { id: 6, content: "" },
        { id: 7, content: "" },
    ]
    const [answer, setAnswer] = useState(defaultAnswer);
    const [result, setResult] = useState(null);
    const [javaCode, setJavaCode] = useState(null);
    const [javaCodeShow, setJavaCodeShow] = useState(false);
    const Image = process.env.PUBLIC_URL + "/img/updownproblem.png";
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
        var encodeInput = input;
        var data = {
            source_code: javaCode,
            language_id: 62,
            stdin: encodeInput,
        };
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
              if(decode(response.data.stdout).slice(-3,-1) === "??????"){
                setTimeout(()=>{
                  finishGame();
                }, 2000)
              }
                setResult(decode(response.data.stdout));
            }).catch(function (error) {
                console.error(error);
            });
        }).catch(function (error) {
            console.error(error);
        });

    }

    function changeAnswer(event) {
        const newAnswer = answer.map((ans) => {
            if (ans.id === Number(event.target.id)) {
                ans.content = event.target.value;
                return ans
            } else {
                return ans
            }
        })
        setAnswer(newAnswer);
    }

    function changeNuriCode() {
        nuriCode = 
        `?????? ??????????????? = ????????????.????????????;
        ?????? ?????? = 1;
        ?????? ??? = 100;
                
        ${answer[0].content}(??????=0,10){
            ?????? ???????????? = (?????? + ${answer[1].content})/2;
            ??????(????????????);
                    
            ??????(???????????? == ${answer[2].content}){
                ??????("??????");
                ${answer[3].content}
            }?????????{
                ??????(???????????? ${answer[4].content} ???????????????){
                    ??????("??????");
                    ${answer[5].content} = ????????????;
                }?????????{
                    ??????("???");
                    ${answer[6].content} = ????????????;
                }
            }
        }`;

        return nuriCode;
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

    function changeCode(event) {
        event.preventDefault();
        changeAnswer(event);
        const nuriCode = changeNuriCode();
        nuriCodeHandler(nuriCode);
    }

    function showJavaCode() {
        setJavaCodeShow(!javaCodeShow);
    }

    useEffect(() => {
        setAnswer(defaultAnswer);
        setResult(null);
    }, [start])

  return (
    <div className="Updown">
      <div className="Updown-content">
        <div className="Updown-content-problem">
          <img className="Updown-content-img" src={Image} alt="????????? ??????" />
          {answer.map((ele) => {
            return (
              <input 
                className={`Updown-game-input-${ele.id} Updown-game-input`} 
                key={ele.id}
                id={ele.id}
                value={ele.content} 
                onChange={(event) => changeCode(event)} 
              />
            )
          })}
        </div>
        <div className="Updown-content-problem">
          <div>?????? ??????</div>
          <Editor
            id="result"
            height="90%"
            defaultLanguage="java"
            defaultValue=""
            value={result}
          />
        </div>
      </div>
      {javaCodeShow && 
        <div className="Updown-content-java-bg">
          <div className="Updown-content-java">
            <div className="Updown-content-java-header">
              <h1>?????? ??????</h1>
              <MdClose 
                className="Updown-content-java-close-icon" 
                onClick={() => showJavaCode()} 
                size="30px" 
              />
            </div>
            
            <Editor
                id="javaCode"
                width="90%"
                height="80%"
                defaultLanguage="java"
                defaultValue=""
                value={javaCode}
            />
          </div>
      </div>
      }
      <div className="Updown-content-button-group">
        <button className="Updown-content-button" onClick={run}>????????????</button>
        <button className="Updown-content-button" onClick={() => showJavaCode()}>?????? ?????? ??????</button>
      </div>
    </div>
  );
}
export default UpDown;