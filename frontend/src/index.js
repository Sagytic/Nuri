import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// routing
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/landing/Landing'
import Main from './pages/main/Main'
import Intro from './pages/intro/Intro'
import Math from './pages/math/Math'
import Game from './pages/game/Game'
import Reference from './pages/reference/Reference'
import MyPage from './pages/myPage/MyPage'
import SignUp from './pages/user/SignUp'
import Login from './pages/user/Login'
// 

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />}>
        <Route path="landing" element={<Landing />}></Route>
        <Route path="main" element={<Main />}></Route>
        <Route path="intro" element={<Intro />}></Route>
        <Route path="math/:id" element={<Math />}></Route>
        <Route path="game/:id" element={<Game />}></Route>
        <Route path="reference" element={<Reference />}></Route>
        <Route path="mypage/:id" element={<MyPage />}></Route>
        <Route path="user/signup" element={<SignUp />}></Route>
        <Route path="user/login" element={<Login />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
