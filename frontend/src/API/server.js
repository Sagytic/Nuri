const server = {
  // BASE_URL: "http://localhost:8081",
  BASE_URL: "https://nurihangeul.com:8081",
  Judge_URL: "https://ce.judge0.com",

  ROUTES: {
    signup: "/api/v1/user/signup",
    checkId: "/api/v1/user/checkid",
    checkNickName: "/api/v1/user/checkname",
    login: "/api/v1/user/login",
    userData: "/api/v1/user",
    rank: "/api/v1/mathgame/rank",
  }

}

export default server;