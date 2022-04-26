import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <p>Footer here?</p>
        </div>
    )
}

export default Layout;