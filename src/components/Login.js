import React from "react";
import { Button } from "@material-ui/core";
import "../css/Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "../components/reducer";
import { useStateValue } from "../components/StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div classname="login">
      <div className="login__logo">
        <img
          className="fbLogo"
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="facebook logo"
          height="75px"
          width="100"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
          alt="facebook text"
          height="30px"
          width="180px"
        />

        <Button type="submit" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
