import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from "./Pages/Login";
import {Principal} from "./Pages/Principal";
import {Registro} from "./Pages/Registro";
import {CrearPost} from "./Pages/CrearPost";

 export const  App = () => {
    return <div>
   <Router>
   <Routes>
   <Route path="/" element = {<Registro />} />
   <Route path="/Principal" element = {<Principal />} />
   <Route path="/Login" element = {<Login />} />
   <Route path="/CrearPost" element = {<CrearPost />} />
   </Routes>
   </Router>
    </div>
 };






