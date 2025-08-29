import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useSWR from "swr";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/locations",
    (url) =>
      fetch(url)
        .then((res) => res.json())
        .then((json) => json)
  );
  // while(isLoading){
  //   console.log('wait')
  // }
  if (error) {
    return <div>failed to load</div>;
  }
  // var real_data= isLoading ? Array.from({ length: 20 }) : data


  // console.log(isLoading);
  if(!isLoading){
    return (
      <>
        <p>
          {data[0]['Mailing Address']}
        </p>
      </>
    )
  }
}

export default App
