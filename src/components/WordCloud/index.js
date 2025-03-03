import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const words = [
    { text: "Software Engineer", value: 60 },
    { text: "Software Test Engineer", value: 50 },
    { text: "Creative", value: 50 },
    { text: "NYU", value: 46 },
    { text: "Computer Science", value: 48 },
    { text: "Master's Degree", value: 50 },
    { text: "Detail-oriented", value: 40 },
    { text: "Team Player", value: 42 },
    { text: "Problem Solver", value: 40 },
    { text: "Hiking", value: 36 },
    { text: "Road-trip", value: 36 },
    { text: "Fitness", value: 30 },
    { text: "Motivated", value: 48 },
    { text: "Adaptable", value: 50 },
    { text: "Curious", value: 40 },
    { text: "Fine Art", value: 42 },
    { text: "Proactive", value: 40 },
    { text: "Mission-driven", value: 45 },
    { text: "Collaborative", value: 50 },
    { text: "Self-motivated", value: 48 },
    { text: "Analytical Thinking", value: 43 },
    { text: "Solution-oriented", value: 47 },
    { text: "Attention to Detail", value: 45 },
    { text: "Entrepreneurial Spirit", value: 46 }
];


const WordCloud = () => {
    const [hoveredWord, setHoveredWord] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const wordCloudRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleMouseEnter = (word) => {
        setHoveredWord(word);
    };

    const handleMouseLeave = () => {
        setHoveredWord(null);
    };

    const getWordPosition = (index) => {
        const { x, y } = mousePosition;
        const offsetX = Math.sin(index) * 400;
        let offsetY = Math.cos(index) * 320;

        return {
            transform: `translate(${x / 50 + offsetX}px, ${y / 50 + offsetY + 100}px)`
        };
    };


    return (
        <div className="word-cloud" ref={wordCloudRef}>
            {words.map((word, index) => {
                const fontSize = `${word.value}px`;
                const isHovered = hoveredWord === word.text;
                return (
                    <span
                        key={index}
                        className={`word ${isHovered ? "hovered" : ""}`}
                        style={{
                            fontSize,
                            color: isHovered ? "#FF9E00" : "#FFCE00",
                            transform: `${getWordPosition(index).transform} ${
                                isHovered ? "scale(1.5)" : "scale(1)"
                            }`,
                        }}
                        onMouseEnter={() => handleMouseEnter(word.text)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {word.text}
                    </span>
                );
            })}
        </div>
    );
};

export default WordCloud;
