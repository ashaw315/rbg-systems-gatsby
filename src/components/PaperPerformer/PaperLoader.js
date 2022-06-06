//load arbitrary number of scripts

//receive a function telling it how and what to play/start

//be able to start 1 paper canvas thingy(or more!!!!!!???)
//be able to stop 1 paper canvas thingy(or more!!!!!!???)
import React, { useState, useEffect, useRef } from "react";
import {useStaticQuery, graphql} from "gatsby"
import { prettyRaCo, colorWheel } from "./PaperUtils.js"
import points from "./MousePerformances/performance-1.json"
// import * as paper from "paper";
import { Helmet } from "react-helmet";
const stripNewlinesAndTabs = (str) => str.replace(/\s+/g, ' ').trim();

const num = (range) => Math.floor(Math.random()*range)

class Performer {
  constructor(points, paper){
    this.points = points
    this.paper = paper
    this.playing = false;
    this.speed = .7
    this.clickInterval = null;
  }
  start(){
    this.playing = true;
    this.startTime = new Date();
    this.frame();
  }
  frame(that){
    if(!that){
      that = this;
    }
    let time = (that.speed*(new Date() - that.startTime)) % points[points.length-1].ms;
    let point = new that.paper.Point(that.points
      .find((p)=>p.ms>time)
      .pt.slice(1)
    )
    if(that.paper.view){
      point = point.multiply(that.paper.view.size)
    }
    if(that.paper.tool?.onMouseMove)
    that.paper.tool?.onMouseMove({
      point: point,
      delta: that.lastPoint ? point.subtract(that.lastPoint) : [0,0]
    });
    that.lastPoint = point;

    if(!!!that.paper.tool?.onMouseMove){
        if(that.clickInterval === null)
        that.clickInterval = setInterval(()=>{
          let time = (that.speed*(new Date() - that.startTime)) % points[points.length-1].ms;
          let point = new that.paper.Point(that.points
            .find((p)=>p.ms>time)
            .pt.slice(1)
          )
          that.paper.tool?.onMouseDown({
            point: point
          });
        },1000)
    }
    else if(Math.random() < .1){
      if(that.clickInterval !== null){
        clearInterval(that.clickInterval);
      }
      that.paper.tool?.onMouseDown({
        point: point
      });
    }
    if(that.playing){
      requestAnimationFrame(() => that.frame(that));
    }
  }
  stop(){
    this.playing = false;
  }
}

const toolAdderString = `if(onMouseDown)
tool.onMouseDown = onMouseDown;
if(onMouseMove)
tool.onMouseMove = onMouseMove;`

const getPaperscripts = (names) => {
  let scripts = names.map(name => {
    let scriptString = require(`!!raw-loader!./Paperscripts/${name}`);
    return scriptString.default+toolAdderString;
  })
  return scripts;
}

let counter = 0;

const clearChildren = (item) => {
  if(item.children && item.children.length){
    item.children.map(clearChildren);
    item.remove();
  } else {
    item.remove();
  }
}

let performer;

const PaperLoader = () => {
    const scriptNames = useStaticQuery(graphql`query SiteQuery {
      allFile(filter: {base: {glob: "*.pjs"}}) {
        edges {
          node {
            relativePath
          }
        }
      }
    }`).allFile.edges.map(e => e.node.relativePath);
    const scripts = getPaperscripts(scriptNames);
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const canvasRef = useRef(null);
    const loaderRef = useRef(null);
    const paperJsRef = useRef(null);
    const drawInterval = useRef(null);
    const toolRef = useRef(null);
    const [canvasId, setCanvasId] = useState("pl-"+Math.random().toString().slice(15))
    const paperRef = useRef(null);
    const handleScriptInject = ({ scriptTags }) => {
      if (scriptTags) {
        const scriptTag = scriptTags[0];
        scriptTag.onload = () => {
          if(window.paper){
            paperRef.current = window.paper;
            performer = new Performer(points, paperRef.current);
            performer.start()
            changeScript(num(scripts.length));
          }
        }
      }
    }
    const changeScript = (index) => {
      let paper = paperRef.current
      if(paper.project){
        // paper.project.activeLayer.removeChildren();
        paper.project.remove()
      }
      paper.setup(canvasRef.current)
      paper.execute(scripts[(index ? index : (counter++))%scripts.length]);
      let w = paper.view.bounds.width;
      let h = paper.view.bounds.height;
      paper.tool.onMouseDown({point: new paper.Point(num(w),num(h))});
      clearInterval(drawInterval.current)
      let pt = new paper.Point(num(w),num(h))
      console.log(paper)
    }
    useEffect(() => {
      window.num = (range) => Math.floor(Math.random()*range)
      window.prettyRaCo = prettyRaCo;
      window.colorWheel = colorWheel
      let paper;
        if(typeof window !== 'undefined') {
          let loaderBounds = loaderRef.current.parentElement.getBoundingClientRect()
          console.log(loaderBounds)
          setWidth(loaderBounds.width)
          setHeight(loaderBounds.height)
          canvasRef.current = document.getElementById(canvasId);
        }
    }, [paperRef])

    return (
      <div id="paper-loader" ref={loaderRef}>
      <Helmet script={[
        { src: 'https://unpkg.com/acorn' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js' }
      ]}
      onChangeClientState={(newState, addedTags) => handleScriptInject(addedTags)}
      >

      </Helmet>
      <canvas  id={canvasId} ref={canvasRef} resize='true' width={width} height={height}></canvas>
      </div>
    )


}
export default PaperLoader;
