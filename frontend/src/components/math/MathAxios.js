import axios from "axios";
import server from "../../API/server";

const allMathUrl = server.BASE_URL + server.ROUTES.allMath

function GetAllMath() {
  return axios.get(allMathUrl + "/1", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

export { GetAllMath };