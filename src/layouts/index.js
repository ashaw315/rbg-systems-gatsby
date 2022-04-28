import React from "react";
import Navbar from "../components/Navbar";
import PaperAnimation from "../components/PaperAnimation";

const Layout = ({ children }) => {
    return (
        <div>
            <PaperAnimation />
            <Navbar />
            {children}
            <p>Footer here?</p>
        </div>
    )
}

export default Layout;