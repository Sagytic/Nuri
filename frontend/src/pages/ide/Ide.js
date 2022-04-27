import React, { useState } from "react";
import axios from 'axios';

const Ide = () => {
    var apiUrl = "https://ce.judge0.com";
    const [result, setResult] = useState(null);

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

    var source_code = 
        `public class Main {
            public static void main(String[] args) {
                int a = 3;
                int b = 5;
                System.out.println("Hello 누리");
                System.out.println(1+2);
                System.out.println(a+b);
            }
        }
        `;

    function run() {
        var source_code_encode = encode(source_code);
        var data = {
            source_code: source_code_encode,
            language_id: 62,
            stdin: "",
            compiler_options: "",
            command_line_arguments: "",
            redirect_stderr_to_stdout: true
        }

        axios
            .post(apiUrl + '/submissions?base64_encoded=true&wait=true',
                data,
                {
                    Headers: {
                        contentType: "application/json"
                    }
                })
            .then((res) => {
                console.log(source_code);
                console.log(decode(res.data.stdout));
                setResult(decode(res.data.stdout));
            })
    }



    return (
        <div> 
        <h4>
            소스코드 : {source_code}
        </h4>
            <button onClick={run()}>RUN</button>
        <h4>
            결과값 : {result}
        </h4>   
        </div>


    )

}

export default Ide;
