const server = {
<<<<<<< HEAD
  // BASE_URL: "https://localhost:8081",
  BASE_URL: "https://nurihangeul.com:8081",
  Judge_URL: "https://ce.judge0.com",
=======
  // BASE_URL: "http://localhost:8081",
  Judge_URL: "https://ce.judge0.com",
  BASE_URL: "https://k6s202.p.ssafy.io:8081",
>>>>>>> df106cd2a7363088e872c68c0ac55854bf6b0089

  ROUTES: {
    signup: "/api/v1/user/signup",
    checkId: "/api/v1/user/checkid",
    checkNickName: "/api/v1/user/checkname",
    login: "/api/v1/user/login",
    userData: "/api/v1/user",
  }

}

export default server;