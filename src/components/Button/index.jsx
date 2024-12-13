import "./index.css"

export function Button (props) {
    const {type = 'button', size = "md" , variant = "primary" , onClick, disabled, children} = props;

    const className = `my-button my-button--${variant} my-button--${size}`;


    return <button className={className}
    type={type}
    onClick={onClick}
    disabled={disabled}>{children}</button>
}