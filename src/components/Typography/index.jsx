import "./index.css";

export function Typography({ textSize = "md", children, className = "" }) {
  const textClassName = `typography typography--${textSize} ${className}`;
  return <p className={textClassName}>{children}</p>;
}