import "./index.css";

export function Heading({ level = 1, children, className = "" }) {
  const Tag = `h${level}`;

  return <Tag className={`heading heading--h${level} ${className}`}>{children}</Tag>;
}