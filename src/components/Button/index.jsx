import "./index.css"

export function Button (props) {
    const { size = "md" , variant = "primary" ,children} = props;

    const className = `my-button my-button--${variant} my-button--${size}`;


    return <button className={className}>{children}</button>
}