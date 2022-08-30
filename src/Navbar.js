import React from "react";
import ReactDOM  from "react-dom";
import "./Navbar.css";
import "./NavbarKeys.css"
export default function Navbar() {
    return(
            <div className="bar">
          
            <div className="gap one">

            <a target="_blank" rel="noopener noreferrer" href="mailto:arthurdaynight@gmail.com">
                <img  className="b" src="https://img.cppng.com/download/2020-06/66428-icons-computer-google-email-gmail-free-transparent-image-hq.png" /> 
                </a>

                </div>

            <div className="gap2">
            <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/sevven7th/">

                <img  className="icons first" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
</a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/arthurdaynight">

            <img className="icons second" src="https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360" />
            </a>
            <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arthur-day-5169b3183/">

            <img className="icons third" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" />
            </a>
            </div>
            
            </div>
    
    )
}