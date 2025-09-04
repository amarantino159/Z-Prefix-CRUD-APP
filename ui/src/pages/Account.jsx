import { useEffect, useState } from "react";

import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function Account() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  // console.log(user)
  if(user){
    return(<>
    {/* Shows the Account Details */}
      <h1>Account Details</h1>
      <h2>First Name: {user.First_Name}</h2>
      <h2>Last Name: {user.Last_Name}</h2>
      <h2>Username: {user.Username}</h2>
      <h2>Password: {user.Password}</h2>
      <h2>id: {user.id}</h2>
      <button onClick={()=>{
        apiDel(user.id);
        setUser(undefined);
        alert('Account Deleted!');
        }}>Delete Account</button>
        {/* Delete button to remove your account */}
    </>)
  }
  else{
    return(<>
    {/* default page view when no user logged in */}
      <h1>Account Details</h1>
      <h2>Not Logged in! Login to see Account Details</h2>
    </>)

  }

}

async function apiDel(userid){
  // very basic delete call to the API server
    const response = await fetch(`http://localhost:8080/users/${userid}`, {
    method: "DELETE",

    });
    // console.log(response);
  }

