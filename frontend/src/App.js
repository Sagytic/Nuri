import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/main/Nav';
import { Outlet } from 'react-router-dom';
import { UserInfo } from "../src/components/user/UserAxios";

function App() {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const isLogin = localStorage.getItem("jwt") ? true : false;
    if (isLogin) {
      UserInfo()
      .then((response) => {
        setUserData(response.data)
      })
      .catch(() => {
        console.log("회원 정보 받아오기 실패")
      })
    }
  }, [])

  return (
    <div className="App">
      <Nav userData={userData} setUserData={setUserData} />
      <Outlet />
    </div>
  );
}

export default App;
