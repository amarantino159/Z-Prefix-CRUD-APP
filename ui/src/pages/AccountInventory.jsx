import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"
// import { Gallery } from "../components/Gallery.jsx";



export function AccountInventory() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  const [items, setItems] = useState([]);

  if(user){

    const data = fetch(`http://localhost:8080/item/userid/${user.id}`)
      .then((dat)=>dat.json())
      .then(data=>{
        // console.log(data);
        setItems(data);
      });

    if(items){
      // console.log(items);
      return(<>
        <h1>All Items From Your Account</h1>
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
      </>)
    }

  }
  else{
    return(<>
      <h1>All Items From Your Account</h1>
      <h2>If you were logged in</h2>
    </>)
    }
}
