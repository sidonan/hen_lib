import "./index.css";

export function Tooltip({ text, position = "top", children }) {
  return (
    <div className="tooltip-container">
      {children}
      <span className={`tooltip-box tooltip-${position}`}>{text}</span>
    </div>
  );
}