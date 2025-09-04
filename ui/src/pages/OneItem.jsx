import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function OneItem() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const {user,setUser} = useUser();
  const [edit, setEdit] = useState(false);

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
        // console.log('item '+ItemNameEntered)

        apiget(ItemNameEntered);

      }}>Submit</button>
      <p>{items.length==0?'None found':''}</p>

        <button
          onClick={()=>{
            setEdit(!edit);
            // console.log('edit '+edit);
          }}>
            {/* toggle button for the editing feature */}
          Edit Toggle: {edit?'True':'False'}
        </button>

      <ol>
      {items.map((elm)=>{
      return(
        <li>
          <ul>
            <li>
              Item Name:
            </li>
            {/* each item is editable field when the toggle says so */}
            <li contenteditable={edit?"plaintext-only":'false'}
            id={elm.id+'ItemInput'}>
              {elm["Item_Name"]}
            </li>
            <li>
              Description:
            </li>
            <li contenteditable={edit?"plaintext-only":'false'}
            id={elm.id+'DescriptionInput'}>
              {elm["Description"].length>=100?elm["Description"].slice(0,100)+'...':elm["Description"].slice(0,100)}
            </li>
            <li>
              Quantity:
            </li>
            <li contenteditable={edit?"plaintext-only":'false'}
            id={elm.id+'QuantityInput'}>
              {elm["Quantity"]}
            </li>
            <li>
              {/* submission button to trigger the patch of the edits once user is done editing  */}
              <button
              onClick={()=>
              {
                let itemname = document.getElementById(elm.id+'ItemInput').innerText
                let description = document.getElementById(elm.id+'DescriptionInput').innerText
                let quantity = document.getElementById(elm.id+'QuantityInput').innerText

                // console.log('itemname '+itemname)
                // console.log('description '+description)
                // console.log('quantity '+quantity)
                // console.log('item id '+elm.id)
                apiPatch(itemname,description,quantity,elm.id)
              }
              }>
                Submit edits
              </button>
            </li>
            <li>
              <button
              onClick={()=>{
                apiDel(elm.id);
                navigate('/accountinventory'); // after deletion the user is re navigated as described in user stories
              }}>
                Delete Item
              </button>
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

  async function apiPatch(itemname,description,quantity,id){ // simple patch function given the new item details
  var updateitem = {
    Item_Name:itemname,
    Description:description,
    Quantity:quantity
  }
    // console.log(JSON.stringify(updateitem));

    const response = await fetch(`http://localhost:8080/item/${id}`, {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(updateitem),

    });
    if(response.status == 400){
      alert('Patch failed, most likely invalid type of inputs')
    }
    else if(response.status == 200){
      alert('Edited Successfully')
    }
    // console.log(response);
}

async function apiDel(itemid){ // very simple delete function

    const response = await fetch(`http://localhost:8080/item/${itemid}`, {
    method: "DELETE",
    });
    // console.log(response);
  }
  }


