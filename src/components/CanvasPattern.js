import React, { useState, useEffect, useRef, useCallback } from "react";

const num = (range) => {
  return Math.floor(Math.random()*range)
}

const CanvasPattern = ({ children,size=12,space=3 }) => {
  let canvasRef = useRef(null);
  let [canvasDims,setCanvasDims] = useState([0,0])
  const [canvasPattern, setCanvasPattern] = useState({});
  let ctxRef = useRef();
  // let imgDataRef = useRef();
  useEffect (() => {
    if(typeof window !== 'undefined'){
      setCanvasDims([window.innerWidth,window.innerHeight]);
      if(!ctxRef.current)
        ctxRef.current = canvasRef.current.getContext("2d");
      let ctx = ctxRef.current;
      // setInterval(()=>{
        ctx.clearRect(0,0,size,size);
        for (var i = 0; i < size; i+= space) {
          for (var j = 0; j < size; j+= space) {
            let color = ["rgba(255,0,0,1)","rgba(0,0,255,1)","rgba(75,146,40,1)"][Math.floor(Math.random()*3)];
            if(color){
              ctx.fillStyle = color;
              ctx.fillRect(i+num(space),j+num(space),1,1);
            }
          }
        }
        setCanvasPattern({
          backgroundImage: `url(${canvasRef.current.toDataURL()})`
        });
      // },1000)

    }
  }, [])
  return <div id="canvas-pattern" style={canvasPattern}>
    <canvas ref={canvasRef} width={size} height={size} id="backdrop"></canvas>
    { children }
    </div>
}
export default CanvasPattern;
