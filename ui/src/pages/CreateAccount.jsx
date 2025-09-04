import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function CreateAccount() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  return(<>
  {/* below is the account details inputs */}
    <h1>Create Account</h1>
    <h2>UserName</h2>
    <input id='UsernameInput' type='text' defaultValue=''/>
    <h2>Password</h2>
    <input id='PasswordInput' type='text' defaultValue=''/>
    <h2>First Name</h2>
    <input id='FirstNameInput' type='text' defaultValue=''/>
    <h2>Last Name</h2>
    <input id='LastNameInput' type='text' defaultValue=''/>
    <br/>
    <button onClick={async ()=>{
      let usernameEntered = document.getElementById('UsernameInput').value
      let passwordEntered = document.getElementById('PasswordInput').value
      let firstnameEntered = document.getElementById('FirstNameInput').value
      let lastnameEntered = document.getElementById('LastNameInput').value

      // console.log('user '+usernameEntered)
      // console.log('pass '+passwordEntered)
      // console.log('first '+firstnameEntered)
      // console.log('last '+lastnameEntered)

      apiPost(usernameEntered,passwordEntered,firstnameEntered,lastnameEntered)

    }}>Submit</button>
  </>)


async function apiPost(username,password,firstname,lastname){
  if(username&&password&&firstname&&lastname){ // checks that all parameters are inputted
    const newuser = {
      First_Name: firstname,
      Last_Name: lastname,
      Username: username,
      Password: password
    };
    // console.log(JSON.stringify(newuser));

    const response = await fetch("http://localhost:8080/users", { // basic API POST function
    method: "POST",
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(newuser),

    });

    // console.log(response);
    if(response.status == 400){ // gives the user an alert if the API server returns an error
      alert('Post failed, most likely invalid type of inputs')
    }
    else if(response.status == 200){
      navigate('/login')
    }
  }
  else{
    // alerts the user when the input is not good but why its not good
    alert('Patch failed, most likely invalid type of inputs')
  }
}
}

