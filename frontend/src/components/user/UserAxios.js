import axios from "axios";
import server from "../../API/server";

const checkIdUrl = server.BASE_URL + server.ROUTES.checkId;
const checkNickNameUrl = server.BASE_URL + server.ROUTES.checkNickName;
const signupUrl = server.BASE_URL + server.ROUTES.signup;
const loginUrl = server.BASE_URL + server.ROUTES.login;
const userInfoUrl = server.BASE_URL + server.ROUTES.userData;

function CheckId(id) {
  const params = { userId: id };
  return axios.get(checkIdUrl, { params })
}

function CheckNickName(nickName) {
  const params = { userNickname: nickName };
  return axios.get(checkNickNameUrl, { params });
}

function UserSignup(data) {
  return axios.post(signupUrl, data);
}

function UserLogin(data) {
  return axios.post(loginUrl, data);
}

function UserInfo() {
  return axios.get(userInfoUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    }
  })
}

function ChangeUserNickname(data) {
  return axios.patch(userInfoUrl, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

function ChangeUserPhoto(data) {
  console.log(data)
  return fetch(userInfoUrl + '/user_photo', {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: data,
  })
}

function GetUserCode() {
  return axios.get(userInfoUrl + '/code', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
}

export { CheckId, CheckNickName, UserSignup, UserLogin, UserInfo, ChangeUserNickname, ChangeUserPhoto, GetUserCode };