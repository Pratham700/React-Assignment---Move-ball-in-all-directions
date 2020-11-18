import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });



  const reset = () => {
    setRenderBall(false) ;
    setX(0) ;
    setY(0) ;
    setBallPosition({
      left: "0px",
      top: "0px",
    });
  };


   const start  = () => {
        setRenderBall(true) ;  
   }


  const renderChoice = () => {
    return renderBall ? (
      <div className="ball" style = {{
        position:"absolute",
        left : ballPosition.left,
        top :  ballPosition.top,
      }}></div>
    ):(
      <button onClick={start} className = "start">
        Start
      </button>
    )
  };



  const updateXY = (newX,newY) => {
    setX(newX) ;
    setY(newY) ;
    setBallPosition({
      left: newX + "px" ,
      top: newY+ "px" 
     });
  }

  useEffect( () => {
    const keyListener = (evt) => {
      
      if(renderBall) {
        if(evt.keyCode === 37) {
         // console.log("key left to be  Pressed") ;
          updateXY(x-5,y);
          //console.log("key left Pressed") ;
        }else if(evt.keyCode === 38) {
         // console.log("key down to be  Pressed") ;
          updateXY(x,y-5) ;
         // console.log("key down Pressed") ;
        }else if(evt.keyCode === 39) {
         // console.log("key right Pressed") ;
            updateXY(x+5,y) ;
          //  console.log("key right Pressed") ;
        }else if(evt.keyCode === 40){
          updateXY(x,y+5) ;
        }
      }
    };
    
    document.addEventListener('keydown',keyListener) ;

    return () => document.removeEventListener('keydown',keyListener) ;
  }) ;



  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
