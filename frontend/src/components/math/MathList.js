import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import "./MathList.css"

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
            <Button size="small"  onClick={() => { navigate("/math/0") }}>통나무 자르기 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                  <AiFillEye size="15"/>
                  14
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
            <Button size="small"  onClick={() => { navigate("/math/1") }}>원주율 구하기 <AiOutlineForward /></Button>
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
                287
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}