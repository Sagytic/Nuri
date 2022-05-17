import server from "../../API/server";
import axios from "axios";

const rankUrl = server.BASE_URL + server.ROUTES.rank;
const saveUrl = server.BASE_URL + server.ROUTES.mathgameSave;

function SaveRank(data) {
  return axios.post(rankUrl, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function GetRank(mathgameId) {
  return axios.get(rankUrl + `/${mathgameId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function SaveGame(data) {
  return axios.post(saveUrl + "/play", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

export { SaveRank, GetRank, SaveGame }