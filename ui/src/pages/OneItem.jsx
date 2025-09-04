import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"
// import { Gallery } from "../components/Gallery.jsx";



export function OneItem() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const {user,setUser} = useUser();

  async function apiget(itemname){
    const data = fetch(`http://localhost:8080/item/name/${itemname}/userid/${user.id}`)
    .then((dat)=>dat.json())
    .then(data=>{
      // console.log(data);
      setItems(data);
    });
  }

    // console.log(items);
  if(user){
    return(<>
      <h1>Search for an Item From the logged in account</h1>
      <h2>(a list of all matches is shown if item name matches several)</h2>
      <h2>Item Name</h2>
      <input id='ItemNameInput' type='text' defaultValue=''/>
      <button onClick={async ()=>{
        let ItemNameEntered = document.getElementById('ItemNameInput').value


        console.log('item '+ItemNameEntered)

        apiget(ItemNameEntered);

      }}>Submit</button>
      <p>{items.length==0?'None found':''}</p>
      <ol>
      {items.map((elm)=>{
      return(
        <li>
          <ul>
            <li>
              Item Name: {elm["Item_Name"]}
            </li>
            <li>
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

    </>)}
  else{
    return(<>
    <h1>Search for an Item From the logged in account</h1>
      <h2>(a list of all matches is shown if item name matches several)</h2>
    <h1>You are currently logged out, log it to search here</h1>
    </>)
  }
  }


