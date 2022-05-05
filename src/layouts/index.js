import React from "react";
import Navbar from "../components/Navbar";
import PaperAnimation from "../components/PaperAnimation";
import PaperLoader from "../components/PaperLoader";
import img from "../images/rgb-systems-3d-desk-3.png"

console.log(img)
const Layout = ({ children }) => {
    return (
        <div id="site">
        <div id="desk">
          <img id="desk-image" src={img}></img>
            <PaperLoader />
        </div>
            <Navbar />

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
