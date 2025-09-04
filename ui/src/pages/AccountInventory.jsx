import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function AccountInventory() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  const [items, setItems] = useState([]);

  if(user){ // checks if the user is logged in, if not shows a default
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
        {items.map((elm)=>{ // maps all of the items
        return(
          <li>
            <ul>
              <li>
                Item Name: {elm["Item_Name"]}
              </li>
              <li>
                {/* description is sliced at 100 chars and gets '...' added as required by the stories */}
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
    {/* default shown if no user logged in */}
      <h1>All Items From Your Account</h1>
      <h2>If you were logged in</h2>
    </>)
    }
}
