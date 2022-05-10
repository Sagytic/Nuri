import React from "react";
import { Link } from "react-router-dom"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import "./RefSidebar.css";

function RefSidebar() {

  // const maxViewHeight = 100vh
  const maxViewHeight = window.innerHeight
  // const headItem = ['코딩 기본 개념', '누리 문법', '코드 작성 방법', '직접 작성']
  // const subItem = [['1. 변수', '2. 들여쓰기'], ['1. 기본타입', '2. 배열', '3. 자료구조', '4. 조건문', '5. 반복문', '6. 수학식', '7. 출력']]

  return (
    <div className="RefSidebar-container">
      <List
        sx={{
          width: '100%',
          maxWidth: 240,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          // maxHeight: screen.height,
          maxHeight: maxViewHeight,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
      <li>
        <ul>
          <ListSubheader>코딩 기본 개념</ListSubheader>
          <Link to='/reference' state={{PathStep:0}}><ListItem>1. 변수</ListItem></Link>
          <Link to='/reference' state={{PathStep:1}}><ListItem>2. 들여쓰기</ListItem></Link>
        </ul>
        <ul>
          <ListSubheader>누리 문법</ListSubheader>
          <Link to='/reference' state={{PathStep:2}}><ListItem>1. 기본타입</ListItem></Link>
          <Link to='/reference' state={{PathStep:3}}><ListItem>2. 배열, 묶음</ListItem></Link>
          <Link to='/reference' state={{PathStep:4}}><ListItem>3. 자료구조</ListItem></Link>
          <Link to='/reference' state={{PathStep:5}}><ListItem>4. 조건문</ListItem></Link>
          <Link to='/reference' state={{PathStep:6}}><ListItem>5. 반복문</ListItem></Link>
          <Link to='/reference' state={{PathStep:7}}><ListItem>6. 수학식</ListItem></Link>
          <Link to='/reference' state={{PathStep:8}}><ListItem>7. 입력, 출력</ListItem></Link>
        </ul>
        <ul>
          <ListSubheader>코드 작성 방법</ListSubheader>
        </ul>
        <ul>
          <ListSubheader>직접 작성하러 가기</ListSubheader>
        </ul>
      </li>
        {/* {headItem.map((sectionId) => (

          <li key={`${sectionId}`}>
            <ul>
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {
              subItem.map((item) => (
                <ListItem key={`item-${subItem[item]}`}>
                  <ListItemText primary={`${item}, ${sectionId}`} />
                </ListItem>
              ))
              }
            </ul>
          </li>
        ))} */}
      </List>
    </div>
  );
}

export default RefSidebar