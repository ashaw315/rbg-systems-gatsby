import React, { useState, useEffect } from "react";
// import Paper from 'paper'
import { Helmet } from "react-helmet";

const PaperAnimation = () => {
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')

    useEffect(() => {
        if(typeof window !== 'undefined') {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)

        }
    }, [])


    return (
        <div className="backdrop-canvas">
            <Helmet>
                <script type="text/javascript" src="https://unpkg.com/acorn"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.15/paper-full.min.js"></script>
                <script type="text/paperscript" src="/BackgroundScript.js" canvas="myCanvas"></script>
            </Helmet>
            {/* <Sketch /> */}
            <canvas id="myCanvas" resize='true' width={width} height={height} ></canvas>
        </div>
    )
}
export default PaperAnimation;
