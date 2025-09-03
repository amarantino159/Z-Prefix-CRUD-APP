import { useEffect, useState } from "react";
import useSWR from "swr";
import {useNavigate,Link } from "react-router-dom";
// import { Gallery } from "../components/Gallery.jsx";

export function NavigateButtons() {
  const navigate = useNavigate();
  return(
    <>
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/')}>Create Account</button>
      <button onClick={()=>navigate('/')}>Account</button>
      <button onClick={()=>navigate('/')}>Account Item Gallery</button>
      <button onClick={()=>navigate('/')}>All Items</button>
    </>
  );
}