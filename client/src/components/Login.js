import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../util/axiosWithAuth";

const initialLoginForm = {

  username: "",
  password: ""

}

const Login = () => {

  const { push } = useHistory();

  const [login, setLogin] = useState(initialLoginForm);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // useEffect(() => {
  //   submitLogin()
  // }, [])

  const submitLogin = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post("/login", login)
    .then((res) => {
        console.log("Login Res is: ", res)
        localStorage.setItem("token", res.data.payload)
        // push("/protected")
    })
    .catch((err) => {
      console.log("Login Err is: ", err)
    })
  }

  const handleChangeLogin = (e) => {
    e.persist()
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <div>
        <form onSubmit={submitLogin}>
           <input
            type="text"
            name="username"
            value={login.username}
            onChange={handleChangeLogin}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChangeLogin}
            placeholder="password"
          />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;

