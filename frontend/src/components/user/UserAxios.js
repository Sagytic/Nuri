import axios from "axios";
import server from "../../API/server";

// const signupUrl = server.BASE_URL + server.ROUTES.signup;
const checkIdUrl = server.BASE_URL + server.ROUTES.checkId;
const checkNickNameUrl = server.BASE_URL + server.ROUTES.checkNickName;
// const loginUrl = server.BASE_URL + server.ROUTES.login;

function CheckId(id) {
  const params = { userId: id };
  return axios.get(checkIdUrl, { params })
}

function CheckNickName(nickName) {
  const params = { userNickname: nickName };
  return axios.get(checkNickNameUrl, { params });
}

export { CheckId, CheckNickName };