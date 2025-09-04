import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function UpdateAccount() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  if(user){
    return(<>
    {/* user input for the patch */}
      <h1>Update Account</h1>
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
        // button to initiate the patch
        let usernameEntered = document.getElementById('UsernameInput').value
        let passwordEntered = document.getElementById('PasswordInput').value
        let firstnameEntered = document.getElementById('FirstNameInput').value
        let lastnameEntered = document.getElementById('LastNameInput').value

        // console.log('user '+usernameEntered)
        // console.log('pass '+passwordEntered)
        // console.log('first '+firstnameEntered)
        // console.log('last '+lastnameEntered)

        apiPatch(usernameEntered,passwordEntered,firstnameEntered,lastnameEntered,user.id)

      }}>Submit</button>
    </>)
  }
  else{ // if user is not logged in then shown a default page
    return(<>
      <h1>Account Details</h1>
      <h2>Not Logged in! Login to see Account Details</h2>
    </>)

  }

}

async function apiPatch(username,password,firstname,lastname,id){ // basic patch function
  var updateuser = {}

  if(username){
    updateuser.Username = username;
  }
  if(password){
    updateuser.Password = password;
  }
  if(firstname){
    updateuser.First_Name = firstname;
  }
  if(lastname){
    updateuser.Last_Name = lastname;
  }

    console.log(JSON.stringify(updateuser));

    const response = await fetch(`http://localhost:8080/users/${id}`, {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(updateuser),

    });
    if(response.status == 400){
      alert('Patch failed, most likely invalid type of inputs')
    }
    else if(response.status == 200){
      setUser(undefined);
    }
    console.log(response);


}