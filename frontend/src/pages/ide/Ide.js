import React, { useState } from "react";
import axios from 'axios';
import server from "../../API/server";
import Editor from "@monaco-editor/react";
import { AiOutlineCopy } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import Spinner from "../../components/spinner/Spinner"
import "./Ide.css"

function Ide() {
    const API_BASE_URL = server.BASE_URL;
    const API_RAPID_URL = server.Rapid_URL;
    const API_RAPID_KEY = process.env.REACT_APP_RAPID_API;

    var nuriCode, input;
    const [result, setResult] = useState(null);
    const [javaCode, setJavaCode] = useState(null);
    const [toggle, setToggle] = useState(true);
    var [theme, setTheme] = useState("vs-light");
    

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

    function run() {
        window.spinnerOn = true;
        var data = {
            source_code: javaCode,
            language_id: 62,
            stdin: input,
        }
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
                setResult(decode(response.data.stdout));
                window.spinnerOn = false;
            }).catch(function (error) {
                console.error(error);
                window.spinnerOn = false;
            });
        }).catch(function (error) {
            console.error(error);
            window.spinnerOn = false;
        });
    }

    function nuriCodeHandler(e) {
        window.copyToCode = e;
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

    function copy() {
        const text = window.copyToCode;
        if (text === undefined) {
            alert("복사할 내용이 없습니다.")
        } else {
            navigator.clipboard.writeText(text);
            alert('코드를 복사했습니다!');
        }
    }

    function toggleClick(){
        setToggle(!toggle);
        if(toggle){
            setTheme("vs-dark");
        }else{
            setTheme("vs-light");
        }
    }

    function inputValueHandler(e){
        input = e;
    }

    const spinnerOn = false;

    return (
        <div className="Ide">
            {spinnerOn && <Spinner />}
            <div className="Ide-item">
                <div className="Ide-item-header">
                    <div style={{ textDecoration: "underLine 5px"}}>누리 코드</div>
                    <div className="Ide-item-button-group">
                        <button 
                            className={"Ide-theme-button " + (toggle ? "toggle-off" : "")} 
                            onClick={() => toggleClick()}
                        >
                            {toggle ? "다크모드" : "일반모드"}
                        </button>
                        <AiOutlineCopy className="Ide-item-icon" size="30" onClick={() => copy()}/>
                        <BiSave className="Ide-item-icon" size="30" />
                        <button className="Ide-item-button" onClick={() => run()}>RUN</button>
                    </div>
                </div>
                <div className={"Ide-item-content " + (toggle ? "" : "toggle-off")}>
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

            <div className="Ide-item">
                <div className="Ide-item-header" style={{ textDecoration: "underLine 5px"}}>자바 코드</div>
                <div className={"Ide-item-content " + (toggle ? "" : "toggle-off")}>
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

            <div className="Ide-item">
            <div className="Ide-item-header" style={{ textDecoration: "underLine 5px"}}>입력 값</div>
                <div className={"Ide-item-content " + (toggle ? "" : "toggle-off")}>
                    <Editor
                        id="input"
                        height="30vh"
                        defaultLanguage="java"
                        defaultValue=""
                        theme={theme}
                        value={input}
                        onChange={inputValueHandler}
                    />
                </div>
            </div>

            <div className="Ide-item">
                <div className="Ide-item-header" style={{ textDecoration: "underLine 5px"}}>실행 결과</div>
                <div className={"Ide-item-content " + (toggle ? "" : "toggle-off")}>
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
        </div>
    );
}

export default Ide;