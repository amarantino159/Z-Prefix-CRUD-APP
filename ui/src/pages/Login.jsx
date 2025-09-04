import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function Login() {
  const navigate = useNavigate();
  const [user1, setUser1] = useState({});
  const [userFound, setUserFound] = useState(-1);
  const [passMatch, setPassMatch] = useState(-1);
  const {user,setUser} = useUser();

async function apiLog(username,password){ // function to call the password from the database to compare
  setPassMatch(-1);
  setUserFound(-1);

  const data = await fetch(`http://localhost:8080/users/username/${username}`); //basic fetch for the info
    if(data.status!=200){
      setUserFound(0);
      setUser(undefined);
      // console.log('userFound '+userFound);
    }
    else if(data.status==200){
      const datajson = await data.json();
      const tempuser = datajson[0]
      // console.log(tempuser);
      setUserFound(1);
      // console.log('userFound '+userFound);
      // console.log('user.Password '+user.Password)
      // console.log('password '+ password)
      if(tempuser.Password==password){
        setUser(tempuser);
        setPassMatch(1)
        navigate('/accountinventory');
        // console.log('PassMatch '+passMatch);
      }
      else{
        // console.log('tempuser.Password '+tempuser.Password)
        setPassMatch(0)
        setUser(undefined);
        // console.log('PassMatch '+passMatch);
      }
    }
    // console.log(user[0])
    return 'done'
  }

  return (<>
  {/* below are inputs for logging in */}
    <h1>Login</h1>
    <h2>UserName</h2>
    <input id='UsernameInput' type='text' defaultValue=''/>
    <h2>Password</h2>
    <input id='PasswordInput' type='text' defaultValue=''/>
    <br/>
    <button onClick={async ()=>{
      let usernameEntered = document.getElementById('UsernameInput').value
      let passwordEntered = document.getElementById('PasswordInput').value

      // console.log('user '+usernameEntered)
      // console.log('pass '+passwordEntered)

      apiLog(usernameEntered,passwordEntered);

    }}>Submit</button>
    {/* below are useState based errors so they persist on the screen */}
    <p> {userFound==0?'User Not Found':
              ''}</p>

    {/* Password Error Message */}
    <p> {passMatch==0?'password WRONG':
              passMatch==1?'PassMatch!':
              ''}</p>
  </>);
  }

