const server = {
  BASE_URL: "https://localhost:8081",
  Judge_URL: "https://ce.judge0.com",
  // BASE_URL: "배포된 서버로!"

  ROUTES: {
    signup: "/api/v1/user/signup",
    checkId: "/api/v1/user/checkid",
    checkNickName: "/api/v1/user/checkname",
    login: "/api/v1/user/login",
    userData: "/api/v1/user",
  }

}

export default server;