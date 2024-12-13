import "./index.css";
export function Input (props) {
    const {danger = false ,label,placeholder,type = "text",value,onChange,children,} = props;
    const className = `my-input ${danger ? "my-input--danger" : ""}`;
    const labelClassName = `my-input--label ${danger ? "label--danger" : ""}`;
    return (
        <div className="my-input--container">
            <label className={labelClassName}>{label}</label>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {children}
        </div>
    );
}
