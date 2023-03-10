import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
    return (
        <div id="footer" className="container footer-container">
            <h1>
                Visit My Socials To Connect With Me!
                <a href="#home">
                    <h2>
                        <BsMouse />- scroll up-
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href="https://www.instagram.com/noahjfa/" target="_blank">
                    <BsInstagram className="social" />
                </a>
                <a
                    href="https://www.facebook.com/noah.fajarda/"
                    target="_blank"
                >
                    <FaFacebookF className="social" />
                </a>
                <a href="https://twitter.com/noahyobro" target="_blank">
                    <BsTwitter className="social" />
                </a>
                {/* <a href="https://www.instagram.com/noahjfa/" target="_blank">
                    <TiSocialYoutube className="social" />
                </a> */}
                <a href="https://github.com/noahfajarda" target="_blank">
                    <TiSocialGithub className="social" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
