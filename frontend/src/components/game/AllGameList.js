import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import './AllGameList.css'

function AllGameList() {
  const navigate = useNavigate();
  const Img = process.env.PUBLIC_URL + "img/"

  return (
    <div className="AllGameList-Container">
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Img"
            height="140"
            image={Img+"updowngamethumbnail.PNG"}
          />
          {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              업다운 게임
            </Typography>
          </CardContent> */}
          <CardActions>
            <Button size="small" onClick={() => { navigate("/game/2") }}>업다운 게임 <AiOutlineForward /></Button>
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
            alt="Img"
            height="140"
            image={Img+"cardconnectgamethumbnail.PNG"}
          />
          <CardActions>
            <Button size="small" onClick={() => { navigate("/game/0") }}>연결 게임 <AiOutlineForward /></Button>
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
            alt="Img"
            height="140"
            image={Img+"finddifferentgamethumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/game/1") }}>틀린 부분 찾기 <AiOutlineForward /></Button>
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
            alt="Img"
            height="140"
            image={Img+"31gamethumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/game/2") }}>31 게임 <AiOutlineForward /></Button>
              <div style={{display: "flex", alignItems: "center"}}>
                <AiFillEye size="15"/>
                1532
              </div>
          </CardActions>
          </div>
        </Card>
      </div>
    </div>
  )  
}

export default AllGameList