import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
    return (
        <div id="contact" className="container contact-container">
            <h1>Contact Me</h1>
            <div className="contact-links">
                <a href="" className="contact youtube">
                    <AiOutlineYoutube className="icon" />
                    <h2>
                        youtube <span>Noah Fajarda</span>
                    </h2>
                </a>
                <a href="" className="contact whatsapp">
                    <AiOutlineLinkedin className="icon" />
                    <h2>
                        LinkedIn <span>Noah Fajarda</span>
                    </h2>
                </a>
                <a href="" className="contact instagram">
                    <AiOutlineInstagram className="icon" />
                    <h2>
                        instagram <span>noahjfa</span>
                    </h2>
                </a>
            </div>
        </div>
    );
}

export default Contact;
