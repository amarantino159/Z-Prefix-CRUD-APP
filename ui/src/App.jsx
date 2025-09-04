import { StrictMode } from "react";
import { useState } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NavigateButtons } from "./components/NavigateButtons.jsx";
import { Login } from "./pages/Login.jsx";
import { CreateAccount } from "./pages/CreateAccount.jsx";
import { UpdateAccount } from "./pages/UpdateAccount.jsx";
import { Account } from "./pages/Account.jsx";
import { AllItems } from "./pages/AllItems.jsx";
import { AccountInventory } from "./pages/AccountInventory.jsx";
import { AddItem } from "./pages/AddItem.jsx";
import {useUser} from "./components/UserProvider"
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const {user,setUser} = useUser();
  //setUser(undefined);

  // const navigate = useNavigate();
  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:8080/Users",
  //   (url) =>
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => json)
  // );
  // // while(isLoading){
  // //   console.log('wait')
  // // }
  // if (error) {
  //   return <div>failed to load</div>;
  // }
  // // var real_data= isLoading ? Array.from({ length: 20 }) : data


  // // console.log(isLoading);
  // if(!isLoading){
  //   return (
  //     <>
  //       <p>
  //         {data[0]['First_Name']}
  //       </p>
  //     </>
  //   )
  // }

  return (
    <>
      <BrowserRouter>
        <NavigateButtons/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/createaccount" element={<CreateAccount />}/>
          <Route path="/updateaccount" element={<UpdateAccount />}/>
          <Route path="/account" element={<Account />}/>
          <Route path="/allitems" element={<AllItems />}/>
          <Route path="/additem" element={<AddItem />}/>
          <Route path="/accountinventory" element={<AccountInventory />}/>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
            {/* <Route path="product/:id" element={<Details />} /> */}

        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App
