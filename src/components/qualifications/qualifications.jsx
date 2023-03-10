import "./qualifications.css";

const Qualifications = () => {
    return (
        <div>
            <span className="quali-text">My Work</span>
            <div className="qualifications-container">
                <a
                    href="https://github.com/noahfajarda/Project-2-Juke-Joint"
                    target="_blank"
                    className="qualification"
                >
                    <div className="content juke-joint"></div>
                    <h1>Juke Joint</h1>
                </a>
                <a
                    href="https://github.com/noahfajarda/18-Social-Network-API"
                    target="_blank"
                    className="qualification"
                >
                    <div className="content css"></div>
                    <h1>Networking API</h1>
                </a>
                <a
                    href="https://github.com/noahfajarda/12-Employee-Tracker"
                    target="_blank"
                    className="qualification"
                >
                    <div className="content javascript"></div>
                    <h1>Employee DB</h1>
                </a>
                <a
                    href="https://github.com/noahfajarda/11-Note-Taker"
                    target="_blank"
                    className="qualification"
                >
                    <div className="content bootstrap"></div>
                    <h1>Note Taker</h1>
                </a>
                <a
                    href="https://github.com/noahfajarda/10-Team-Profile-Generator"
                    target="_blank"
                    className="qualification"
                >
                    <div className="content react"></div>
                    <h1>Team Profile Generator</h1>
                </a>
                <a
                    href="https://github.com/noahfajarda/06-Weather-Dashboard"
                    target="_blank"
                    className="qualification"
                >
                    <div className="content c-plus-plus"></div>
                    <h1>Weather Dashboard</h1>
                </a>
            </div>
        </div>
    );
};

export default Qualifications;
