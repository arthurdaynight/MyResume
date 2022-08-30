import React from "react";
import "./resume.css";
import "./ResumeKeys.css";

export default function Resume() {
    return(
    <div>
                <div className="secretColumn"></div>
        <div>
        <img className="whiteFrame" src="https://i.ibb.co/qg4nykg/Untitled-1.png" alt=""/>
        <div className="mailContainer">
            <a target="_blank" rel="noopener noreferrer" href="mailto:arthurdaynight@gmail.com">
                <img  className="mailLogo" src="https://i.ibb.co/19qyFTX/Untitled-2.png" /> 
                </a>
                </div>
        </div>
        
        <div>
        <img className="pic" src="https://i.ibb.co/qnjHxyT/1626815767261.jpg" alt=""/>
        </div>
        
        </div> 
        )
}