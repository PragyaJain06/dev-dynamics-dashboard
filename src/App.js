import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";

function App() {
  // useEffect(()=>{
  //   let debounce=setTimeout(winningScore,5000)
  //   console.log(debounce)
  //     return()=>{
  //       console.log("unmounts")
  //     clearTimeout(debounce)
  //   }
  // },[inputval])

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
