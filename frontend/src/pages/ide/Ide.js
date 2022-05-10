import React, { useState } from "react";
import axios from 'axios';
import server from "../../API/server";
import "./Ide.css"
import Editor from "@monaco-editor/react";
import { ToggleButton } from "@mui/material";
import {  } from "@mui/system";

function Ide() {
    const API_BASE_URL = server.BASE_URL;
    const API_Judge_URL = server.Judge_URL;
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
        console.log(javaCode);
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

    function toggleClick(){
        setToggle((prev) => !prev);
        console.log(toggle);
        if(toggle){
            setTheme("vs-dark");
        }else{
            setTheme("vs-light");
        }
    }

    function inputValueHandler(e){
        input = e;
    }
    
    return (
        <div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            

            <div>테마 설정</div>
            <ToggleButton onClick={toggleClick} toggle={toggle}>
            </ToggleButton>
            <h3>{toggle ? "OFF" : "ON"}</h3>

            <div>누리 코드</div>
            <Editor
                id="nuriCode"
                height="30vh"
                defaultLanguage="java"
                defaultValue=""
                theme={theme}
                value={nuriCode}
                onChange={nuriCodeHandler}
            />

            <br></br>

            <div>자바 코드</div>
            <Editor
                id="javaCode"
                height="30vh"
                defaultLanguage="java"
                defaultValue=""
                theme={theme}
                value={javaCode}
            />

            <div>입력 값</div>
            <Editor
                id="input"
                height="30vh"
                defaultLanguage="java"
                defaultValue=""
                theme={theme}
                value={input}
                onChange={inputValueHandler}
            />

            <div><button onClick={run}>RUN</button></div>
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

export default Ide;
