import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom";

function home(){
    return(
        <div className="home-container">
            <h2> Explore the Gallery </h2>
            <div className="home-grid"> 
                <Link to="/image" className="home-box">
                <img src="public/Images/Innocence.PNG" alt="Images"/>
                <p> Images </p>            
            </Link>

            <link to="/videos" className="home-box"/>
                <img src="public/Videos/Alien-planet.mp4" alt="Videos"/>
                <p> Videos </p>
            <Link/>

            <Link to="/digital-art" className="home-box"/>
                <img src="ublic/Images/Depth-of-thought.jpg" alt="Digital Art"/>
                <p> Digitsl Art </p>
            </div>
        </div>
        
    )
}

export default home;