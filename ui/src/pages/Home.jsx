import { useEffect, useState } from "react";
import useSWR from "swr";
import { BrowserRouter as BrowserRouter, Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import {useUser} from "../components/UserProvider"

export function Home() {
  return (<>
  {/* basic home page to show the user the features of the site */}
    <h1>Welcome!</h1>
    <h2>See below for the README highlights on using this Site!</h2>

  </>);

}
