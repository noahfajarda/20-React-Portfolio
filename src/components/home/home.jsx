import "./home.css";
import img from "../props/profile-pic.png";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";
import React, { useEffect } from "react";
import test from "../props/react.png";

function Home() {
    const handleClick = () => {
        const toggle = document.querySelector(".main-img");
        toggle.classList.toggle("active");
    };

    return (
        <div id="home" className="container home-container">
            <div className="logo" onClick={handleClick}>
                <div className="main-img">
                    <span className="circle">
                        <span className="inner"></span>
                    </span>
                    <span className="circle">
                        <span className="inner"></span>
                    </span>
                    <span className="circle">
                        <span className="inner"></span>
                    </span>
                    <span className="circle">
                        <span className="inner"></span>
                    </span>
                    <span className="circle">
                        <span className="inner"></span>
                    </span>
                    <span className="circle">
                        <span className="inner"></span>
                    </span>
                    <span className="circle">
                        <span className="inner"></span>
                    </span>
                    <span className="circle">
                        <span className="inner"></span>
                    </span>
                </div>
                <img id="main-image" src={img} alt="" />
            </div>
            <a href="#footer" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className="scroll" />
                <hr />
            </a>
            <h2>
                <span>About Me</span> <br />
                <p>
                    Welcome to my portfolio! I'm an aspiring software developer
                    residing in the Bay Area. I recently graduated from the
                    University of California, Irvine in the field of Health
                    Sciences. I have a wide variety of projects including
                    sports, music, movies and tech.
                    <br />
                    <br />
                    <p>
                        At this moment, I manage products and inventory, create
                        datasheets, and prepare estimates for a company in Santa
                        Clara, CA called T1Nexus. My passion of sports mainly
                        stems out toward basketball, as I always find time to
                        either play, practice, analyze, or watch the sport. I
                        always try to find ways to improve my craft in the sport
                        so that I can be better than the day before.
                    </p>
                    <br />
                    <p>
                        Piano and guitar are the main instruments I practice and
                        I look for songs that interest me to practice in order
                        to stay motivated. Technology is also very interesting
                        to me. Whether it is new innovations or updates to
                        existing technologies, I always try to keep up to date
                        with these products through articles, videos, and
                        podcasts.
                    </p>
                </p>
            </h2>

            <Buttons />
        </div>
    );
}

export default Home;
