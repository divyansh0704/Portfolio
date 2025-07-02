import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import App from "./App";
import "./index.css";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AddProject from "./pages/AddProject";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      
      <Route path="/" element={<App/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/admin/add-project" element={<AddProject/>}/>
      
    </Routes>
  </Router>
)