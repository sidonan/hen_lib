import "./index.css";
import { useState } from "react";

export function Accordion({ title, defaultOpen = false, children }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
  
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
          {/* Меняющийся текст */}
          <h3 className="accordion-title">{isOpen ? `${title} Expanded` : title}</h3>
          {/* Иконка для состояния */}
          <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div className="accordion-body">{children}</div>}
      </div>
    );
  }