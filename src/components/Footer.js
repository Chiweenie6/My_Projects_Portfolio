import React from "react";
import "../styles/styles.css";

export default function Footer () {
    return (
        <div id="footer" class="text-center bg-success bg-opacity-75">
            <a href="https://github.com/Chiweenie6" class="m-3"><img src={require("./images/GitHub.jpg")} alt="GitHub" height="50" width="50"></img></a>
            <a href="https://www.linkedin.com/in/kevin-breedlove-41647793/" class="m-3"><img src={require("./images/Linkedin.png")} alt="Linkedin" height="50" width="50"></img></a>
        </div>
    );
}