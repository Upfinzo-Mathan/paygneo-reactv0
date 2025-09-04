function CustomButton({ children, className = "", onClick, href, ...props }) {
    const buttonContent = (
        <>
            <span className="text">{children}</span>
            <div className="icon">
                <img src="/assets/images/arrow_right.svg" alt="Button Arrow" className="tele_img" />
            </div>
        </>
    );

    if (href) {
        return (
            <a href={href} className={`btn ${className}`} onClick={onClick} {...props}>
                {buttonContent}
            </a>
        );
    }

    return (
        <button className={`btn ${className}`} onClick={onClick} {...props}>
            {buttonContent}
        </button>
    );
}

export default CustomButton;
