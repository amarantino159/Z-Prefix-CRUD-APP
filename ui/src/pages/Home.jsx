import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"
// import { Gallery } from "../components/Gallery.jsx";

export function Home() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/item",
    (url) =>
      fetch(url)
        .then((res) => res.json())
        .then((json) => json)
  );
  // console.log(data[0]);
  // console.log(user.Username);

  if (error) return <div>failed to load</div>;
  if(!isLoading){
  return (<>
    {/* <p>{data[0]['Item_Name']}</p> */}
    {/* <button onClick={()=>navigate('/login')}>login</button> */}




      {/* <Gallery
        data={isLoading ? Array.from({ length: 20 }) : data}
        isLoading={isLoading}
      /> */}
  </>);
  }
}
