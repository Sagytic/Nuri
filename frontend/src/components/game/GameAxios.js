import server from "../../API/server";
import axios from "axios";

const rankUrl = server.BASE_URL + server.ROUTES.rank;

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

export { SaveRank, GetRank }