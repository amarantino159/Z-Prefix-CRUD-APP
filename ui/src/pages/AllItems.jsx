import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"
// import { Gallery } from "../components/Gallery.jsx";



export function AllItems() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const data = fetch(`http://localhost:8080/item`)
    .then((dat)=>dat.json())
    .then(data=>{
      // console.log(data);
      setItems(data);
    });

  if(items){
    // console.log(items);
    return(<>
      <h1>All Items From All Inventory Managers</h1>
      <ol>
      {items.map((elm)=>{
      return(
        <li>
          <ul>
            <li>
              Item Name: {elm["Item_Name"]}
            </li>
            <li>
              Description: {elm["Description"]}
            </li>
            <li>
              Quantity: {elm["Quantity"]}
            </li>
            <br></br>
          </ul>
        </li>
        )
      })}
      </ol>
    </>)
  }
}

