import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../components/Navbar";
import PaperAnimation from "../components/PaperAnimation";
import Mouse from "../components/Mouse";


const Layout = ({ children }) => {
const coordRef = useRef({x:500, y:500});
const angleRef = useRef(0);
const cursorRef = useRef(null)

const update = (e) => {
    coordRef.current = {
        x: e.clientX,
        y: e.clientY,
    }
    let {movementX, movementY} = e
    // console.log(movementX, movementY)
    if(Math.abs(movementX) + Math.abs(movementY) > 2){
        angleRef.current = (Math.atan2(movementY,movementX) + Math.PI * 0.5) 
    } 
}

useEffect (() => {
if(typeof window !== 'undefined'){
    window.addEventListener('mousemove', (e) => {
        cursorRef.current.style.left = coordRef.current.x + 'px'
        cursorRef.current.style.top = coordRef.current.y + 'px'
        cursorRef.current.style.transform =  `rotate(${angleRef.current}rad)`   
    })
}
}, [])

//  FOR CURSOR DIV
//<img className="arrow" src="/arrowup.png"/>{`${angleRef.current}`}

    return (
        <div onMouseMove={update} onTouchMove={update} id='site'>
            <div className="cursor" ref={cursorRef}></div>
            {/* <PaperAnimation /> */}
            <Navbar />
            {/* <Mouse /> */}
            {children}
            <p>Footer here?</p>
        </div>
    )
}

export default Layout;