import "./contact.css";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
    return (
        <div id="contact" className="container contact-container">
            <h1>Contact Me</h1>
            <div className="contact-links">
                <a
                    href="https://github.com/noahfajarda"
                    target="_blank"
                    className="contact youtube"
                >
                    <AiOutlineGithub className="icon" />
                    <h2>
                        Github <span>Noah Fajarda</span>
                    </h2>
                </a>
                <a
                    href="https://www.linkedin.com/in/noah-jonathan-licup-fajarda-019413206/"
                    target="_blank"
                    className="contact whatsapp"
                >
                    <AiOutlineLinkedin className="icon" />
                    <h2>
                        LinkedIn <span>Noah Fajarda</span>
                    </h2>
                </a>
                <a
                    href="https://www.instagram.com/noahjfa/"
                    target="_blank"
                    className="contact instagram"
                >
                    <AiOutlineMail className="icon" />
                    <h2>
                        Gmail <span>nlicupfa@uci.edu</span>
                    </h2>
                </a>
            </div>
        </div>
    );
}

export default Contact;
