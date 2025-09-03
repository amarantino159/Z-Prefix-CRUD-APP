import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
// import { Gallery } from "../components/Gallery.jsx";



export function Login() {
  const [user, setUser] = useState({});
  const [userFound, setUserFound] = useState(-1);
  const [passMatch, setPassMatch] = useState(-1);

  // console.log(data[0]);

  // <input id='inputtext' type='text'></input>
  //   <button onClick={()=>{
  //     let userinput = document.getElementById('inputtext')
  //     if(!answered){
  //       setChoice(userinput.value)
  //       // if(choice == answer){
  //       //   setPlayerScore(playerScore+2);
  //       // }
  //       setAnswered(true)
  //     }
  //   }}>Submit</button>


async function apiLog(username,password){
    var data = await fetch(`http://localhost:8080/users/username/${username}`);
    if(data.status!=200){
      setUserFound(0);
      // console.log('userFound '+userFound);
    }
    else if(data.status==200){
      const datajson = await data.json();
      await setUser(datajson[0]);
      // await user;
      setUserFound(1);
      // console.log('userFound '+userFound);

      // console.log('user.Password '+user.Password)
      // console.log('password '+ password)
      if(user.Password==password){
        setPassMatch(1)
        // console.log('PassMatch '+passMatch);
      }
      else{
        console.log('user.Password '+user.Password)
        setPassMatch(0)
        // console.log('PassMatch '+passMatch);
      }
      setUser(datajson[0]);
    }



    // console.log(user[0])

    return 'done'

  }


  return (<>
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

      apiLog(usernameEntered,passwordEntered)

    }}>Submit</button>

    {/* <p>User is: {user[0]?user[0].Username:'not logged in'}</p> */}
    {/* <p>User: {user?'Found user! '+user.Username:'No User?'}</p> */}


    {/* Username error message and logged in as message */}
    <p> {userFound==0?'User Not Found':
              userFound==1?'Logged in as: '+user.Username:
              ''}</p>

    {/* Password Error Message */}
    <p> {passMatch==0?'password WRONG':
              passMatch==1?'PassMatch!':
              ''}</p>
    {/* <p>Password:{passMatch?'PassMatch!': 'No PassMatch?'}</p> */}




  </>);
  }

