import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function AddItem() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  if(user){ //checks if user is logged in
    return(<>
    {/* below is the inputs for describing the new item to add */}
    <h1>Add Item</h1>
    <h2>Item Name</h2>
    <input id='ItemNameInput' type='text' defaultValue=''/>
    <h2>Description</h2>
    <input id='DescriptionInput' type='text' defaultValue=''/>
    <h2>Quantity</h2>
    <input id='QuantityInput' type='text' defaultValue=''/>
    <br/>
    <button onClick={async ()=>{
      let ItemNameEntered = document.getElementById('ItemNameInput').value
      let DescriptionEntered = document.getElementById('DescriptionInput').value
      let QuantityEntered = document.getElementById('QuantityInput').value

      // console.log('Item Name '+ItemNameEntered)
      // console.log('Disc '+DescriptionEntered)
      // console.log('Quant '+QuantityEntered)

      apiPost(ItemNameEntered,DescriptionEntered,QuantityEntered,user.id)

    }}>Submit</button>
  </>)
  }
  else{
    return(<>
    {/* default in the event the user is not logged in */}
    <h1>Add Item</h1>
    <h2>Login First!</h2>
    </>)
  }



async function apiPost(itemname,description,quantity,id){
  if(itemname&&description&&quantity&&id){ // checks if each required input exists before making the insert-able object
    const newitem = { // item object as described in the ERD
      Item_Name: itemname,
      Description: description,
      Quantity: quantity,
      UserId: id
    };
    // console.log(JSON.stringify(newitem));

    const response = await fetch("http://localhost:8080/item", { // simple API POST function
    method: "POST",
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(newitem),

    });
    // console.log(response);
    if(response.status == 400){ //alerts the user if getting an error from the server
      alert('Post failed, most likely invalid type of inputs')
    }
    else if(response.status == 200){
       navigate('/accountinventory');
    }

  }
  else{
    // alerts the user when the inputs are bad, doesn't clarify which ones though
      alert('Post failed, most likely invalid type of inputs')
  }
}
}