import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/main/Nav';
import { Outlet } from 'react-router-dom';
import { UserInfo } from "../src/components/user/UserAxios";
import ToTopBtn from "./components/main/ToTopBtn";


function App() {
  const [userNickname, setUserNickname] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [userBackImg, setUserBackImg] = useState("");

  useEffect(() => {
    const isLogin = localStorage.getItem("jwt") ? true : false;
    if (isLogin) {
      UserInfo()
      .then((response) => {
        console.log("회원 정보 받아오기 성공", response.data);
        setUserNickname(response.data.userNickname);
        setUserPhoto(response.data.userPhoto);
        setUserBackImg(response.data.userBackgroundImage);
      })
      .catch(() => {
        console.log("회원 정보 받아오기 실패")
      })
    }
  }, [])

  return (
    <div className="App">
      <Nav userNickname={userNickname} />
      <Outlet context={{ userNickname, userPhoto, userBackImg, setUserNickname, setUserPhoto, setUserBackImg }} />
      <ToTopBtn />
    </div>
  );
}

export default App;
