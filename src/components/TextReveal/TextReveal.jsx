import { useState, useEffect } from 'react';
import styles from './TextReveal.module.css'; 

const speeds = {
    pause: 500,
    slow: 120,
    normal: 90,
    fast: 40,
    superFast: 10
};

const textLines = [
    { speed: speeds.slow, string: "Oh, Hola!" },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "me llamo" },
    { speed: speeds.fast, string: "Nahuel", classes: ["red"] },
    { speed: speeds.pause, string: "", pause: true },
    { speed: speeds.normal, string: "Soy un desarrollador web" }
];

function TextReveal() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        let chars = [];
        textLines.forEach((line, index) => {
            if (index < textLines.length - 1) {
                line.string += " ";
            }
            line.string.split("").forEach((char) => {
                chars.push({
                    char: char,
                    isSpace: char === " " && !line.pause,
                    delayAfter: line.speed,
                    classes: line.classes || [],
                    revealed: false
                });
            });
        });
        setCharacters(chars);

        setTimeout(() => {
            revealOneCharacter(chars, 0);
        }, 600);
    }, []);

    const revealOneCharacter = (chars, index) => {
        if (index < chars.length) {
            chars[index].revealed = true;
            setCharacters([...chars]);
            let delay = chars[index].isSpace && !chars[index].pause ? 0 : chars[index].delayAfter;
            setTimeout(() => {
                revealOneCharacter(chars, index + 1);
            }, delay);
        }
    };

    return (
        <div className={styles.textContainer}>
        {characters.map((c, index) => (
            <span key={index} className={`${c.revealed ? styles.revealed : ""} ${c.classes.map(cls => styles[cls]).join(" ")}`}>
                {c.char}
            </span>
        ))}
    </div>
    );
}

export default TextReveal;
