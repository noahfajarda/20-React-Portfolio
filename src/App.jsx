import React, { useState } from "react";

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <div
            className={`${
                theme === "dark" ? "bg-black" : "bg-light"
            } w-screen h-screen flex items-center justify-center p-12 relative`}
        >
            <div
                className={`w-full h-full border 
                ${theme === "dark" ? "border-white" : "border-black"}
            `}
            ></div>
            <div
                className={`absolute bottom-12 left-3 flex flex-col space-y-2
                ${theme === "dark" ? "text-white" : "text-black"}`}
            >
                <p
                    onClick={() =>
                        setTheme((prevTheme) =>
                            prevTheme === "light" ? "dark" : "light"
                        )
                    }
                    className="flex flex-col space-y-2 items-center"
                >
                    <span
                        className={`h-5 w-4 flex-shrink-0 border border-white 
                        ${theme === "dark" ? "border-white" : "border-black"}
                        ${theme === "light" && "bg-white"}`}
                    ></span>
                    <span style={{ "writing-mode": "vertical-rl" }}>LIGHT</span>
                </p>
                <p
                    onClick={() =>
                        setTheme((prevTheme) =>
                            prevTheme === "light" ? "dark" : "light"
                        )
                    }
                    className="flex flex-col space-y-2 items-center"
                >
                    <span
                        className={`h-5 w-4 flex-shrink-0 border border-white 
                        ${theme === "dark" ? "border-white" : "border-black"}
                        ${theme === "dark" && "bg-white"}`}
                    ></span>
                    <span style={{ "writing-mode": "vertical-rl" }}>DARK</span>
                </p>
            </div>
        </div>
    );
}

export default App;
