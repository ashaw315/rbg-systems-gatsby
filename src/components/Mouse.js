import React, { useState, useEffect } from "react";

const Mouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    

    useEffect(() => {

        const cursor = document.querySelector('.cursor')

        const update = (e) => {
            setX(e.x)
            setY(e.y)
        }

        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;


        window.addEventListener('mousemove', update)
        window.addEventListener('touchmove', update)
        return (() => {
            window.removeEventListener('mousemove', update)
            window.removeEventListener('touchmove', update)
        })


    }, [x, y, setX, setY])


    return (
        <div className="cursor">
            <h1>{`x: ${x} y: ${y}`}</h1>
            Mouse Position
        </div>
    )
}

export default Mouse;