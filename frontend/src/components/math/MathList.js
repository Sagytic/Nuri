import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import "./MathList.css"

export default function ImgMediaCard() {
  const testImg = process.env.PUBLIC_URL + "img/nurirang_carousel1.jpg"

  return (
    <div className="GameList-Container">
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="testImg"
            height="140"
            image= {testImg}
          />
          <CardActions>
            <Button size="small">평균 구하기 <AiOutlineForward /></Button>
            <span><AiFillEye />14</span>
          </CardActions>
        </Card>
      </div>
      <div className="Card-Contents">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
            component="img"
            alt="testImg"
            height="140"
            image= {testImg}
          />
          <CardActions>
            <Button size="small">통나무 길이 구하기 <AiOutlineForward /></Button>
            <span><AiFillEye />1532</span>
          </CardActions>
        </Card>
      </div>
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="testImg"
            height="140"
            image= {testImg}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small">원의 넓이 구하기 <AiOutlineForward /></Button>
            <span><AiFillEye />287</span>
          </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}