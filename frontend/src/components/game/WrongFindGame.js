import React, { useState } from "react";
import "./WrongFindGame.css";
function WrongFindGame() {
    const nuriCode = "/img/nuriCode.png"
    const javaCode = "/img/javaCode.png"
    const [cnt, setCnt] = useState(0);

    function click(e){
        var x = e.nativeEvent.offsetX;
        var y = e.nativeEvent.offsetY;
        console.log(x);
        console.log(y);
      
        if(x>=270 && x<=280 && y>=100 && y<=112){
            setCnt(cnt+1);
        }

        if(x>=155 && x<=170 && y>=120 && y<=130){
            setCnt(cnt+1);
        }

        if(x>=255 && x<=263 && y>=178 && y<=186){
            setCnt(cnt+1);
        }

        if(x>=107 && x<=136 && y>=424 && y<=435){
            setCnt(cnt+1);
        }

        if(x>=274 && x<=302 && y>=440 && y<=452){
            setCnt(cnt+1);
        }
    }

    return (
    <div onClick={click}>
        <span>
            <img alt="nuri code" src={process.env.PUBLIC_URL + nuriCode}/>
        </span>
        <span className="javaCode">
            <img alt="nuri code" src={process.env.PUBLIC_URL + javaCode}/>
        </span>
        <div>
            {cnt}/5
        </div>
    </div>
    )
  }
  
  export default WrongFindGame