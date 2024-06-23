import React from "react";
import { BarLoader } from "react-spinners";
import "./Loader.css"

const Loader = () => {
    return (
        <div className="loadContainer">
            <BarLoader/>
            <p>Loading...</p>
        </div>
    )
}

export default Loader
