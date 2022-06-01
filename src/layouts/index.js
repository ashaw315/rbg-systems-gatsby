import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../components/Navbar";
import PaperAnimation from "../components/PaperAnimation";
import Mouse from "../components/Mouse";
import CanvasPattern from "../components/CanvasPattern"
const num = (range) => {
  return Math.floor(Math.random()*range)
}

const Layout = ({ children }) => {

  return (
    <CanvasPattern size={30} space={10}>
      <div id='site'>
          <Navbar />
          <Mouse />
          {children}
      </div>
    </CanvasPattern>
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
