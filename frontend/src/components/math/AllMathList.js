import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import "./AllMathList.css"

export default function ImgMediaCard() {
  const Img = process.env.PUBLIC_URL + "img/"

  const navigate = useNavigate();

  return (
    <div className="GameList-Container">
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="MathImg1"
            height="140"
            image= {Img + "math1thumbnail.PNG"}
          />
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/0") }}>통나무 자르기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
        </Card>
      </div>
      <div className="Card-Contents">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
            component="img"
            alt="MathImg2"
            height="140"
            image= {Img + "math2thumbnail.PNG"}
          />
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/1") }}>원주율 구하기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math3thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/2") }}>원의 원주 구하기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math4thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/3") }}>원의 넓이 구하기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math5thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/4") }}>백분율 구하기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math6thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/5") }}>출력 해보기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math7thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/6") }}>덧셈 프로그램 만들기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math8thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/7") }}>더 큰 숫자 구하기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math9thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/8") }}>반복문 활용하기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math10thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/9") }}>숫자 뽑기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="MathImg3"
            height="140"
            image= {Img + "math11thumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/math/10") }}>과목 평균 구하기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}