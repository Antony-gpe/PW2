import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from "./Pages/Login";
import {Principal} from "./Pages/Principal";
import {Registro} from "./Pages/Registro";
import {CrearPost} from "./Pages/CrearPost";
import {Landing} from "./Pages/Landing";
import { MisPost } from "./Pages/MisPost";
import { Publicacion } from "./Pages/Publicacion";
import { Busqueda } from "./Pages/Busqueda";
import { Perfil } from "./Pages/Perfil";

 export const  App = () => {
    return <div>
   <Router>
   <Routes>
   <Route path="/" element = {<Landing />} />
   <Route path="/Principal" element = {<Principal />} />
   <Route path="/Login" element = {<Login />} />
   <Route path="/CrearPost" element = {<CrearPost />} />
   <Route path="/Registro" element = {<Registro />} />
   <Route path="/MisPost" element = {<MisPost />} />
   <Route path="/Publicacion" element = {<Publicacion />} />
   <Route path="/Busqueda" element = {<Busqueda />} />
   <Route path="/Perfil" element = {<Perfil />} />
   </Routes>
   </Router>
    </div>
 };






