import React, { useState, useEffect, useRef } from "react";

const Mouse = () => {
  const cursorRef = useRef(null);
  const rotatorRef = useRef(null);
  const coordRef = useRef({x:500, y:500});
  const angleRef = useRef(0);
  const lastAngleRef = useRef(0);
  const movement = useRef([0,0])
  const update = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      let {movementX, movementY} = e
      movement.current = [movementX,movementY]
      if(Math.abs(movementX) + Math.abs(movementY) > 3){
          lastAngleRef.current = angleRef.current
          angleRef.current = 360+(Math.atan2(movementY,movementX)/(2* Math.PI)*360) + 90
      }
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rotatorRef.current.style.transform = `rotate(${angleRef.current}deg)`;
  }

  useEffect(() => {
    if(typeof window !== "undefined"){
      // const cursor = cursorRef.current;//document.querySelector('.cursor')
      // const update = (e) => {
      //     setX(e.x)
      //     setY(e.y)
      // }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
    }

    return (() => {
      if(typeof window !== "undefined"){
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    })
  }, [])
  return (
    <div ref={cursorRef} className="cursor">
      <div className="rotator" ref={rotatorRef}></div>
    </div>
  )
}

export default Mouse;
