import { StrictMode } from "react";
import { useState } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
            {/* <Route path="product/:id" element={<Details />} /> */}

        </Routes>
      </BrowserRouter>
    );
}

export default App
