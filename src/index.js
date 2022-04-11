import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createRoot} from "react-dom/client";
import './index.scss'
import App from './app';
import About from './pages/about'
import Default from "./pages/default";
import Design from './pages/design'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <App/> }>
      <Route path="/about" element={ <About/> }/>
      <Route path="/Cases" element={ <Default/> }/>
      <Route path="/strategy" element={ <Default/> }/>
      <Route index element={ <Design/> }/>
      <Route path="/why-work-with-us" element={ <Default/> }/>
      <Route path="/lets-work" element={ <Default/> }/>
      <Route path="*" element= {<Default/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
)