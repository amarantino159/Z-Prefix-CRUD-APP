import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function AllItems() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const data = fetch(`http://localhost:8080/item`)
    .then((dat)=>dat.json())
    .then(data=>{
      // console.log(data);
      setItems(data);
    });

  if(items){ // once the get fetch retrieves the data for the items then they will render
    // console.log(items);
    return(<>
      <h1>All Items From All Inventory Managers</h1>
      <ol>
      {items.map((elm)=>{ // maps the items to show them all as specified by the user stories
      return(
        <li>
          <ul>
            <li>
              Item Name: {elm["Item_Name"]}
            </li>
            <li>
              {/* below the description is again limited to 100 chars and is appended with '...' if exceeds 100 chars */}
              Description: {elm["Description"].length>=100?elm["Description"].slice(0,100)+'...':elm["Description"].slice(0,100)}
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

