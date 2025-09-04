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

import { VisitorOneItem } from "./pages/VisitorOneItem.jsx";
import {useUser} from "./components/UserProvider"
import './App.css'
import { OneItem } from "./pages/OneItem.jsx";


function App() {
  // All App needs to do is render <NavigateButtons/> and the <Routes/>
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
          <Route path="/searchallinventories" element={<VisitorOneItem />}/>
          <Route path="/searchaccountinventory" element={<OneItem />}/>
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App
