import { useEffect, useState } from "react";
import useSWR from "swr";
import {useNavigate,Link } from "react-router-dom";
import {useUser} from "../components/UserProvider"


export function NavigateButtons() {
  const navigate = useNavigate();
  const {user,setUser} = useUser();
  return(
    <>
      <p>User: {user?user.Username:'Visitor'}<button onClick={()=>setUser(undefined)}>LogOut</button></p>
      {/* above is the only non navigate button in this component but it was the best place for it */}
      {/* below is all of teh navigation buttons so all pages are a button away from the user */}
      <button onClick={()=>navigate('/')}>Home</button>
      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/createaccount')}>Create Account</button>
      <button onClick={()=>navigate('/updateaccount')}>Update Account</button>
      <button onClick={()=>navigate('/account')}>Account</button>
      <button onClick={()=>navigate('/allitems')}>All Items</button>
      <button onClick={()=>navigate('/accountinventory')}>Account Inventory</button>
      <button onClick={()=>navigate('/additem')}>Add Item</button>
      <button onClick={()=>navigate('/searchallinventories')}>Search All Inventories</button>
      <button onClick={()=>navigate('/searchaccountinventory')}>Search Account Inventory</button>
    </>
  );
}