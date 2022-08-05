import React, { useState, useEffect, useRef, useCallback } from "react";

const num = (range) => {
  return Math.floor(Math.random()*range)
}

let paintedPixels = [];

const CanvasPattern = ({ children,size=12,space=3, speed=1000 }) => {
  let canvasRef = useRef(null);
  let [canvasDims,setCanvasDims] = useState([0,0])
  const [canvasPattern, setCanvasPattern] = useState({});
  let ctxRef = useRef();
  const drawOnCanvas = (ctx) => {
    ctx.clearRect(0,0,size,size);
    for (var i = 0; i < size+1; i+= space) {
      for (var j = 0; j < size+1; j+= space) {
        let color = ["rgba(255,0,0,1)","rgba(0,0,255,1)","rgba(75,146,40,1)"][Math.floor(Math.random()*3)];
        if(color){
          ctx.fillStyle = color;
          ctx.fillRect(i+num(space),j+num(space),1,1);
          paintedPixels.push([i,j]);
        }
      }
    }
  }
  const changeCanvas = (ctx) => {
    let clearIndex = num(paintedPixels.length);
    let clearPoint = paintedPixels[clearIndex];
    paintedPixels = paintedPixels.slice(0,clearIndex).concat(paintedPixels.slice(clearIndex+1));
    let drawPoint = [num(size),num(size)]
    let color = ["rgba(255,0,0,1)","rgba(0,0,255,1)","rgba(75,146,40,1)"][Math.floor(Math.random()*3)];
    ctx.clearRect(clearPoint[0],clearPoint[1],1,1);
    ctx.fillStyle = color;
    ctx.fillRect(drawPoint[0],drawPoint[1],1,1);
    paintedPixels.push(drawPoint)
  }
  useEffect (() => {
    if(typeof window !== 'undefined' && !ctxRef.current){
      setCanvasDims([window.innerWidth,window.innerHeight]);
      ctxRef.current = canvasRef.current.getContext("2d");
      drawOnCanvas(ctxRef.current);
      setCanvasPattern({
        backgroundImage: `url(${canvasRef.current.toDataURL()})`
      })
      // setInterval(()=> {
      //   if(typeof window === "undefined")
      //     return;
      //   changeCanvas(ctxRef.current);
      //   setCanvasPattern({
      //     backgroundImage: `url(${canvasRef.current.toDataURL()})`
      //   })
      // },speed)
    }
  }, [])
  return <div id="canvas-pattern" style={canvasPattern}>
    <canvas style={{display: "none"}} ref={canvasRef} width={size} height={size} id="backdrop"></canvas>
    { children }
    </div>
}
export default CanvasPattern;
