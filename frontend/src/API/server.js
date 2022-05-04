const server = {
  // BASE_URL: "http://localhost:8081",
  BASE_URL: "https://k6s202.p.ssafy.io:8081",
  BASE_URL_PHOTO: "http://k6s202.p.ssafy.io:8081",
  Judge_URL: "https://ce.judge0.com",

  ROUTES: {
    signup: "/api/v1/user/signup",
    checkId: "/api/v1/user/checkid",
    checkNickName: "/api/v1/user/checkname",
    login: "/api/v1/user/login",
    userData: "/api/v1/user",
  }

}

export default server;