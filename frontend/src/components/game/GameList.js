import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { AiFillEye, AiOutlineForward } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import server from "../../API/server";

import "./GameList.css"

export default function GameListCard() {
  const API_BASE_URL = server.BASE_URL;
  const GameImg = process.env.PUBLIC_URL + "img/"
  const navigate = useNavigate();
  function viewUPdate(number) {
    const id = number;
    // axios
    // .get(API_BASE_URL + '/api/v1/mathgame/' + id,
    //     id,
    //     {
    //         Headers: {
    //             contentType: "application/json"
    //         }
    //     })
    // .then((res) => {
    //     console.log(res);
    // })
    console.log(id);
  }

  return (
    <div className="GameList-Container">
      <div className="Card-Contents">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="GameImg"
            height="140"
            image={GameImg+"updowngamethumbnail.PNG"}
          />
          {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              업다운 게임
            </Typography>
          </CardContent> */}
          <CardActions>
            {/* <Button size="small" onClick={[() => { navigate("/game/2") }, viewUPdate(1)]}>업다운 게임 <AiOutlineForward /></Button> */}
            <Button size="small" onClick={() => { navigate("/game/3") }}>업다운 게임 <AiOutlineForward /></Button>
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
            alt="GameImg"
            height="140"
            image={GameImg+"cardconnectgamethumbnail.PNG"}
          />
          <CardActions>
            <Button size="small" onClick={() => { navigate("/game/1") }}>연결 게임 <AiOutlineForward /></Button>
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
            alt="GameImg"
            height="140"
            image={GameImg+"finddifferentgamethumbnail.PNG"}
          />
          <div className="Card-Footer">
          <CardActions>
            <Button size="small" onClick={() => { navigate("/game/2") }}>틀린 부분 찾기! <AiOutlineForward /></Button>
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