import React, { useEffect, useState } from "react";
import "./header.css";

function Header() {
    const [currentText, setCurrentText] = useState("Biogás");
    const texts = ["Biogás", "Energia Renovável", "Gases Verdes"];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setCurrentText(texts[index]);
        }, 3000); // Troca o texto a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <header className="header">
            <h1>Explorando o Futuro Sustentável</h1>
            <div className="animated-text">{currentText}</div>
        </header>
    );
}

export default Header;