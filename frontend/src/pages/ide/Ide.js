import React, { useState } from "react";
import axios from 'axios';
import { API_BASE_URL, API_Judge_URL } from '../../config/index'
import "./Ide.css"

function Ide() {
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
            userCode:e.target.value
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
            <textarea onChange={nuriCodeHandler} value={nuriCode}/>
            <textarea value={javaCode}/>
            <div><button onClick={run}>RUN</button></div>
            
            <textarea value={result}/>
        </div>
    );
}

export default Ide;
