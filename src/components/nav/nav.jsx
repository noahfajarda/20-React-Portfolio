import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
    const changeActive = () => {
        let Icons = document.querySelectorAll(".navigation .icon");

        Icons.forEach((icon) => {
            icon.addEventListener("click", () => {
                changeactive();
                icon.classList.add("active-nav");
            });
        });

        function changeactive() {
            Icons.forEach((icon) => {
                icon.classList.remove("active-nav");
            });
        }
    };

    return (
        <div className="navigation">
            <a href="#home" onClick={changeActive}>
                <AiOutlineHome className="icon active-nav" />
            </a>
            <a href="#about" onClick={changeActive}>
                <AiOutlineUser className="icon" />
            </a>
            <a href="#members" onClick={changeActive}>
                <TiGroupOutline className="icon" />
            </a>
            <a href="#contact" onClick={changeActive}>
                <BiMessageRoundedDots className="icon" />
            </a>
            <a href="#footer" onClick={changeActive}>
                <BsArrowDownCircle className="icon" />
            </a>
        </div>
    );
}

export default Navbar;
