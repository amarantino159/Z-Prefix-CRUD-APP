import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"
// import { Gallery } from "../components/Gallery.jsx";



export function AddItem() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  if(user){
    return(<>
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


      console.log('Item Name '+ItemNameEntered)
      console.log('Disc '+DescriptionEntered)
      console.log('Quant '+QuantityEntered)


      apiPost(ItemNameEntered,DescriptionEntered,QuantityEntered,user.id)
      navigate('/accountinventory');
      // apiLog(usernameEntered,passwordEntered)

    }}>Submit</button>
  </>)
  }
  else{
    return(<>
    <h1>Add Item</h1>
    <h2>Login First!</h2>
    </>)
  }


//   const response = await fetch("https://example.org/post", {
//   method: "POST",
//   body: JSON.stringify({ username: "example" }),

//    });

}

async function apiPost(itemname,description,quantity,id){
  if(itemname&&description&&quantity&&id){
    const newitem = {
      Item_Name: itemname,
      Description: description,
      Quantity: quantity,
      UserId: id
    };
    console.log(JSON.stringify(newitem));

    const response = await fetch("http://localhost:8080/item", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(newitem),

    });
    console.log(response);
  }
  else{
    console.log('what')
  }
}