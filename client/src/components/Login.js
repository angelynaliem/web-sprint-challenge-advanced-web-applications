import React, { useState, useEffect } from "react";
import axios from "axios";

// import { axiosWithAuth } from ""

const initialLoginForm = {

    
}

const Login = () => {

  const 
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;


// // Step 2: set up login (doesnt need authentication yet, just that user can log in)

// import React from "react";
// import axios from "axios";

// import { axiosWithAuth } from "../util/axiosWithAuth";

// class Login extends React.Component {
//   state = {
//     credentials: {
//       username: "",
//       password: ""
//     }
//   };

//   handleChange = (e) => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = (e) => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post("/login", this.state.credentials)
//       .then((res) => {
//         localStorage.setItem("token", res.data.payload);
//         this.props.history.push("/protected");
//       })
//       .catch((err) => {
//         console.log("Err is: ", err);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.login}>
//           <input
//             type="text"
//             name="username"
//             value={this.state.credentials.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             value={this.state.credentials.password}
//             onChange={this.handleChange}
//           />
//           <button>Log in</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;

