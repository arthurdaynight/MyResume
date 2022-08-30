import React from "react"
import "./Projects.css";
import "./ProjectsKeys.css";

export default function Projects() {
    return(
    
    <div>
    
    <div className="projectContainer1">
    <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/Dr_solid/pen/WNMRBYa?editors=1100">
    <img className="html" src="https://cdn-icons-png.flaticon.com/512/732/732212.png"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/Dr_solid/pen/JjpMepa">
                <img className="css" src="https://i.pinimg.com/564x/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.jpg"/> 
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/Dr_solid/pen/poLwged">
                <img className="jv" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/> 
                   </a>
    </div>

    <div className="projectContainer2"> 
    
                <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arthur-day-5169b3183/">
                <img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"/> 
                   </a>
                   
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/Dr_solid/pen/poLwged">
    <img className="ai" src="https://i.ibb.co/C1Zt0VD/121px-Node-js-logo-svg.png"/> 
                   </a>
    
    <a className="github" target="_blank" rel="noopener noreferrer" href="https://github.com/arthurdaynight">
    <img className="github" src="https://i.ibb.co/Vwv0Vxc/25231.png"/>
       </a>

    </div>
    </div>)
}