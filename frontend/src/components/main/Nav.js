import { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import "./Nav.css"

function Nav() {
  const navigate = useNavigate();
  let windowWidth = useRef();
  windowWidth.current = window.innerWidth;
  console.log(windowWidth.current);
  function moveLogin() {
    navigate("/user/login")
  }

  return (
    <div className="Nav">
      <div>{ windowWidth.current }</div>
      <FiMenu />
      <NavLink className="Nav-logo" to="/" >누리</NavLink>
      <div className="Nav-items">
        <NavLink className="Nav-item" to="/intro" >누리소개</NavLink>
        <NavLink className="Nav-item" to="/reference" >살펴보기</NavLink>
        <NavLink className="Nav-item" to="/game" >게임하기</NavLink>
        <NavLink className="Nav-item" to="/math" >문제풀기</NavLink>
      </div>
      <button className="Nav-item-button" onClick={() => moveLogin()}>로그인</button>
    </div>
  )
}

export default Nav;