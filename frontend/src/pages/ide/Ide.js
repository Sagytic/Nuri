import React, { useState } from "react";
import axios from 'axios';
import server from "../../API/server";
import "./Ide.css"
import Editor from "@monaco-editor/react";

function Ide() {
    const API_BASE_URL = server.BASE_URL;
    const API_Judge_URL = server.Judge_URL;
    const [result, setResult] = useState(null);
    const [javaCode, setJavaCode] = useState(null);
    var nuriCode;

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
        var encodeNuriCode = encode(javaCode);
        var data = {
            source_code: encodeNuriCode,
            language_id: 62,
            stdin: "",
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
            {/* <textarea onChange={nuriCodeHandler} value={nuriCode}/> */}
            <Editor
                height="30vh"
                defaultLanguage="java"
                defaultValue=""
                value={nuriCode}
                onChange={nuriCodeHandler}
            />

            <Editor
                height="30vh"
                defaultLanguage="java"
                defaultValue=""
                value={javaCode}
            />


            <div><button onClick={run}>RUN</button></div>

            <Editor
                height="30vh"
                defaultLanguage="vs-Light"
                defaultValue=""
                value={result}
            />

        </div>
    );
}

export default Ide;
