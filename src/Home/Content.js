import React from 'react'
import "./Content.css"
import Postclick from "../Common/Postclick"
import Storysection from "./Storysection"


import { useDataLayerValue } from "../ContextAPI/DataLayer";


function Content() {
    const [{ File}] = useDataLayerValue();
    return (
        <div className="Content">
            <Storysection/>
            <Postclick/>
            <Postclick/>
            <Postclick/>
            <Postclick/>
      </div>
        
    )
}

export default Content;
