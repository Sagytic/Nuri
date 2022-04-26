import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import "./Nav.css"

function Nav() {
  const navigate = useNavigate();
  const [menuIconShow, setMenuIconShow] = useState(window.innerWidth <= 760 ? true : false);
  
  function moveLogin() {
    navigate("/user/login")
  }

  function resizeHandler() {
    if (window.innerWidth <= 760) {
      setMenuIconShow(true)
    } else {
      setMenuIconShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return function() {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  return (
    <div className="Nav">
      <NavLink className="Nav-logo" to="/" >누리</NavLink>
      <div className="Nav-content">
        {menuIconShow
        ? 
        <>
          <FiMenu size="2rem"/>
          <div className="Nav-items">
            <NavLink className="Nav-item" to="/intro" >누리소개</NavLink>
            <NavLink className="Nav-item" to="/reference" >살펴보기</NavLink>
            <NavLink className="Nav-item" to="/game" >게임하기</NavLink>
            <NavLink className="Nav-item" to="/math" >문제풀기</NavLink>
          </div>
        </>
        : 
        <div className="Nav-items">
          <NavLink className="Nav-item" to="/intro" >누리소개</NavLink>
          <NavLink className="Nav-item" to="/reference" >살펴보기</NavLink>
          <NavLink className="Nav-item" to="/game" >게임하기</NavLink>
          <NavLink className="Nav-item" to="/math" >문제풀기</NavLink>
        </div>}
        <button className="Nav-item-button" onClick={() => moveLogin()}>로그인</button>
      </div>
    </div>
  )
}

export default Nav;