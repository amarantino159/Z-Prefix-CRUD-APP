import { useEffect, useState } from "react";
import useSWR from "swr";
// import { Gallery } from "../components/Gallery.jsx";

export function Login() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/users",
    (url) =>
      fetch(url)
        .then((res) => res.json())
        .then((json) => json)
  );
  // console.log(data[0]);

  if (error) return <div>failed to load</div>;
  if(!isLoading){
  return (<>
    {/* <p>{data[0]['Item_Name']}</p> */}

    <ul>
      {data.map((elm)=>{
      return(
        <ol>
          <li>
            {elm["Username"]}
          </li>
          <li>
            {elm["Password"]}
          </li>
        </ol>
        )
      })}
    </ul>

      {/* <Gallery
        data={isLoading ? Array.from({ length: 20 }) : data}
        isLoading={isLoading}
      /> */}
  </>);
  }
}