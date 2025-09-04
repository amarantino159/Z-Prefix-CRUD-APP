import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"
// import { Gallery } from "../components/Gallery.jsx";



export function Account() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  console.log(user)
  if(user){
    return(<>
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
    </>)
  }
  else{
    return(<>
      <h1>Account Details</h1>
      <h2>Not Logged in! Login to see Account Details</h2>
    </>)

  }

}

async function apiDel(userid){

    const response = await fetch(`http://localhost:8080/users/${userid}`, {
    method: "DELETE",

    });
    console.log(response);
  }

