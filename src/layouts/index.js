import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../components/Navbar";
import PaperAnimation from "../components/PaperAnimation";
import Mouse from "../components/Mouse";

const Layout = ({ children }) => {



// useEffect (() => {
// if(typeof window !== 'undefined'){
//     window.addEventListener('mousemove', (e) => {
//         cursorRef.current.style.left = coordRef.current.x + 'px'
//         cursorRef.current.style.top = coordRef.current.y + 'px'
//         cursorRef.current.style.transform =  `rotate(${angleRef.current}rad)`
//     })
//   }
// }, [])

  return (
      <div id='site'>
          <Navbar />
          <Mouse />
          {children}
      </div>
  )
}

export default Layout;
//<PaperLoader />
// <PaperLoader
//   controller={ (list) => {
//     list[0].start();
//
//     setInterval(()=>{
//       //stop
//       list[rnd(list).start()]
//     },5000)
//     //returns which one(s) to start
//   }} />
// </PaperLoader>
