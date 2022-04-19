import React,{useEffect} from "react";
import { Outlet, Link, NavLink } from 'react-router-dom';
import NavBar from "./components/navbar";
import Footer from "./components/footer";


function App(){

  useEffect(()=>{
    const{ height, width}  = document.body.getBoundingClientRect();
    console.log(height, width)
    // console.log(document.querySelector('[data-splitting]'))

  },[]);

  return (
    <div className="wrapper">
      <div data-scroll>
        <NavBar/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;