const Button = ({ onClick, type = "button", className = "", children }) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;