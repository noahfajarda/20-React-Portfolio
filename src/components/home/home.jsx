import "./home.css";
import img from "../props/img2.jpg";
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
                        <div className="test">React</div>
                    </span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium quas, natus neque, aspernatur totam iste quis
                    consectetur soluta quo nihil quia repellat exercitationem et
                    sint corrupti assumenda dolore ipsum? Itaque? Ullam,
                    assumenda! Obcaecati porro tempore nihil officiis qui velit
                    possimus minus at assumenda ad ratione totam repellat
                    quisquam, fuga non voluptate quas nemo magnam aperiam. Neque
                    a corrupti dicta labore.
                </p>
            </h2>

            <Buttons />
        </div>
    );
}

export default Home;
