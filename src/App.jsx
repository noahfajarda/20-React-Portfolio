import React, { useState } from "react";
import "./styles/index.css";

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <div className="App">
            <header>
                <h3>Welcome, I'm</h3>
                <h1 id="name">Noah Fajarda</h1>
            </header>
            <nav>
                <li>
                    <a href="#aboutMe-section">About Me</a>
                </li>
                <li>
                    <a href="#projects-section">Work</a>
                </li>
                <li>
                    <a href="#contact-section">Contact</a>
                </li>
                <li>
                    <a href="#resume-section">Resume</a>
                </li>
            </nav>
            <section id="content-section">
                <section id="aboutMe-section">
                    <h2 className="section-header">About Me:</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor eos sit consectetur voluptatibus facilis eligendi
                        illum culpa soluta! Officiis distinctio repudiandae id
                        facere nam numquam necessitatibus nostrum! Soluta,
                        tempore. Repudiandae! Quasi nihil maxime, odio laborum
                        repellendus ex nobis sequi. Non laudantium deleniti fuga
                        laborum, nesciunt assumenda autem similique, quo
                        incidunt cupiditate fugiat cum nostrum perspiciatis
                        tenetur expedita? Aliquid, ab quisquam? Odio ad
                        consequuntur totam quo et velit id, blanditiis expedita
                        iste iure dicta harum cumque labore perferendis
                        recusandae dolore vel asperiores numquam in illo dolor.
                        Impedit, eos! Sint, ex consequatur? Tenetur quo
                        laudantium optio voluptas perferendis ut incidunt ab
                        quas aperiam dolor temporibus unde ipsum, tempore
                        reiciendis est. Explicabo debitis minima quaerat eaque
                        porro officiis veniam accusantium nulla dolorum tempore.
                        Itaque laborum iusto ea molestias placeat excepturi ab
                        veniam, est aliquam assumenda inventore illum iste
                        cupiditate quis. Libero, neque atque enim obcaecati
                        earum saepe eum adipisci minus fugiat ea iure? Quaerat
                        voluptatum commodi doloremque earum, quidem assumenda,
                        laborum rerum qui unde illo nesciunt minima eligendi!
                        Nihil, earum? Minima odit assumenda obcaecati optio
                        quisquam laborum, excepturi numquam cupiditate,
                        suscipit, aliquid inventore? Dignissimos cupiditate
                        mollitia sed, illo nostrum similique atque saepe natus
                        ea quaerat ut maiores fuga excepturi commodi itaque
                        minima aliquid possimus enim rem repellendus facere
                        obcaecati culpa quam architecto! Ipsam. Officiis sed
                        aliquid illum saepe quod quo, tempora incidunt
                        aspernatur, vero a magni pariatur obcaecati distinctio.
                        Reiciendis, quibusdam autem? Magni hic corporis beatae
                        sapiente doloremque minus excepturi numquam est harum.
                        Ab optio consectetur laboriosam veniam atque nobis harum
                        aut eveniet voluptate vel omnis soluta magnam laudantium
                        reprehenderit velit quas temporibus quo, itaque saepe
                        iure quisquam neque odio? Voluptatibus, nobis animi!
                    </p>
                </section>
                <section id="projects-section">
                    <h2 className="section-header">Projects</h2>
                    <section className="projects">
                        <a
                            href="https://juke-joint.herokuapp.com/login"
                            target="_blank"
                        >
                            Juke Joint
                        </a>
                        <a
                            href="https://fajarda-note-taker-app.herokuapp.com/"
                            target="_blank"
                        >
                            Note Taker
                        </a>
                        <a
                            href="https://tech-blog-noah.herokuapp.com/"
                            target="_blank"
                        >
                            Tech Blog
                        </a>
                        <a
                            href="https://github.com/noahfajarda/12-Employee-Tracker"
                            target="_blank"
                        >
                            Employee Tracker
                        </a>
                    </section>
                </section>
                <section id="contact-section">
                    <h2 className="section-header">Contact</h2>
                    <section className="contact">
                        <h1>510-925-9031</h1>
                        <h1>nlicupfa@uci.edu</h1>
                        <a
                            href="https://github.com/noahfajarda"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://www.linkedin.com/in/noah-jonathan-licup-fajarda-019413206/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default App;
