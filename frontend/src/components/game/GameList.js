import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import "./GameList.css"

export default function GameListCard() {
  const testImg = process.env.PUBLIC_URL + "img/nurirang_carousel1.jpg"
  return (
    <div className="GameList-Container">
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="testImg"
            height="140"
            image={testImg}
          />
          {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              업다운 게임
            </Typography>
          </CardContent> */}
          <CardActions>
            <Button size="small">업다운 게임 <AiOutlineForward /></Button>
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
            image={testImg}
          />
          <CardActions>
            <Button size="small">연결 게임 <AiOutlineForward /></Button>
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
            image={testImg}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small">31 게임 <AiOutlineForward /></Button>
            <span><AiFillEye />287</span>
          </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}