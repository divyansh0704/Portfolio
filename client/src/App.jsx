import React from "react";
import ProjectReview from "./components/ProjectReview";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css"


export default function App() {
    return(
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <ProjectReview/>

        </>
    )
}