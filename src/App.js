import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Castle from "./Castle";
import Arthur from "./Arthur";
import Sun from "./sun";
import Projects from "./Projects"
import Resume from "./Resume"
export default function App() {
    return(<div>

<Navbar />
<Sun/>
<Castle />
<Arthur />
<Projects />
<Resume />
    </div>)
}