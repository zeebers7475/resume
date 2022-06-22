import './App.css';
import React, { useState, useEffect } from "react"
import CafeRacer from "./Components/CafeRacer"

function App() {

  

    const [mode, setMode] = useState({
      name: "Dark",
      switch: "Light",
      boolean: true
  })

    const [style, setStyle] = useState({
      line1: {opacity: 100, position: "fixed", zIndex: 1},
      line2: {opacity: 0, position: "inherit", zIndex: 2},
      line3: {opacity: 0, position: "inherit", zIndex: 3},
      line4: {opacity: 0, position: "inherit", zIndex: 4},
    })

    const [fade, setFade] = useState(1)

  const toggleLD = () => {
    const body = document.getElementById("body");
      if(mode.boolean === true){
        body.classList.toggle("Dark")   
        setMode({
          name: "Light",
          switch: "Dark",
          boolean: false
        })
      }
      if(mode.boolean === false ){
        body.classList.toggle("Dark")
        setMode({
          name: "Dark",
          switch: "Light",
          boolean: true
        })
      }
  }

  const [scrollMessage, setScrollMessage] = useState("")

    window.addEventListener("scroll", () => {
      setFade((-window.scrollY + 500)/200)
      if(window.scrollY >= 0){
        setStyle({
          line1: {opacity: fade, position: "fixed", zIndex: 1},
          line2: {opacity: 0, position: "inherit", zIndex: 2},
          line3: {opacity: 0, position: "inherit", zIndex: 3},
          line4: {opacity: 0, position: "inherit", zIndex: 4},
        })
      }
      if(window.scrollY >=500 && window.scrollY < 580){
        setStyle({
          line1: {opacity: 0, position: "inherit", zIndex: 1},
          line2: {opacity: 0, position: "fixed", zIndex: 2},
          line3: {opacity: 0, position: "inherit", zIndex: 3},
          line4: {opacity: 0, position: "inherit", zIndex: 4},
        })
      }
      if(window.scrollY >= 580){
        setFade((-window.scrollY + 1100)/200)
        setStyle({
          line1: {opacity: 0, position: "inherit", zIndex: 1},
          line2: {opacity: fade, position: "fixed", zIndex: 2},
          line3: {opacity: 0, position: "inherit", zIndex: 3},
          line4: {opacity: 0, position: "inherit", zIndex: 4},
        })
      }
      if(window.scrollY >=1100 && window.scrollY < 1180){
        setStyle({
          line1: {opacity: 0, position: "inherit", zIndex: 1},
          line2: {opacity: 0, position: "fixed", zIndex: 2},
          line3: {opacity: 0, position: "inherit", zIndex: 3},
          line4: {opacity: 0, position: "inherit", zIndex: 4},
        })
      }
      if(window.scrollY >= 1180){
        setFade((-window.scrollY + 1700)/200)
        setStyle({
          line1: {opacity: 0, position: "inherit", zIndex: 1},
          line2: {opacity: 0, position: "inherit", zIndex: 2},
          line3: {opacity: fade, position: "fixed", zIndex: 3},
          line4: {opacity: 0, position: "inherit", zIndex: 4},
        })
      }
      if(window.scrollY >=1700 && window.scrollY < 1780){
        setStyle({
          line1: {opacity: 0, position: "inherit", zIndex: 1},
          line2: {opacity: 0, position: "fixed", zIndex: 2},
          line3: {opacity: 0, position: "inherit", zIndex: 3},
          line4: {opacity: 0, position: "inherit", zIndex: 4},
        })
      }
      if(window.scrollY > 1780){
        setFade(1)
        setStyle({
          line1: {opacity: 0, position: "inherit", zIndex: 1},
          line2: {opacity: 0, position: "inherit", zIndex: 2},
          line3: {opacity: 0, position: "inherit", zIndex: 3},
          line4: {opacity: fade, position: "fixed", zIndex: 4},
        })
      }
      
    })
    
    const ShowMessage = () => {
      if(window.innerWidth < 400)
      return (
        <p className="ScrollNav"> &#60;-- Scroll Menu --&#62; </p>
      )
      if(window.innerWidth > 400)
      return (
        <></>
      )
    }
    window.onresize = () => {
      if(window.innerWidth < 400){
      setScrollMessage(<p className="ScrollNav"> &#60;-- Scroll Menu --&#62; </p>)  
      }
      
      if(window.innerWidth > 400){
      setScrollMessage("")
      }
    }
      
    
   
      


  return (
    <div onresize={() => console.log(window.innerWidth)}>
      <nav className={"Nav " + mode.name}>
          <a>Home</a>
          <a>Resume</a>
          <a>Portfolio</a>
          <a>Contact</a>
          <button className="" onClick={() => toggleLD()}>{mode.switch}</button>
      </nav>
      <ShowMessage />
      
      <header className={"Header Space " + mode.name}>
        <h1 className="Title" style={style.line1}>
          My name is Kristian Acevedo, I am a Web Developer.
        </h1>
      </header>
      <header className={"Header Space2 " +  mode.name}>
        <h1 className="Title" style={style.line2}>
          In 2019 I graduated from Kean University with a Computer Science Degree.
        </h1>
      </header>
      <header className={"Header Earth " +  mode.name}>
        <h1 className="Title" style={style.line3}>
          As an entrepreneur I started my own business named KIC Web Design.
        </h1>
      </header>
      <header className={"Header Earth2 " + mode.name}>
        <h1 className="Title" style={style.line4}>
          I am looking for a job to challenge my experience, creativity, and passion as a Web Deveolper.
        </h1>
      </header>  
      <div className="SVGContainer">
        <CafeRacer /> 
      </div>    
    </div>
  );
}

export default App;
