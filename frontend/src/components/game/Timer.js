import React, { useEffect, useState, useRef } from "react";
import "./Timer.css";

function Timer({ data, timerStart, timerEnd }) {

  const [minute, setMinute] = useState(0);
  const [sec, setSec] = useState(0);
  const [milliSec, setMilliSec] = useState(0);
  const unit = useRef(0);
  const timer = useRef();

  useEffect(() => {
    if (timerStart) {
      timer.current = setInterval(() => {
        unit.current += 1
        const newMin = parseInt(unit.current / 6000)
        const newSec = parseInt((unit.current / 100) % 60);
        const newMilli = unit.current % 100;
        setMinute(newMin);
        setSec(newSec);
        setMilliSec(newMilli);
      }, 10);
      return () => clearInterval(timer.current);
    } else {
      unit.current = 0
    }
  }, [timerStart]);

  useEffect(() => {
    if (unit.current >= 60000) {
      clearInterval(timer.current)
    }
  }, [milliSec])

  if (timerEnd) {
    clearInterval(timer.current);
  }

  return (
    <div className="Timer">
      <h1 className="Timer-header">{data.title}</h1>
      <h1 className="Timer-header">{minute} 분 {sec} 초 {milliSec}</h1>
    </div>
  )
};

export default Timer;