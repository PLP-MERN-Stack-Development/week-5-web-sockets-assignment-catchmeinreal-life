function Button({children, type, className, onclick}) {


    return(
        <button className={className}  type={type} onClick={onclick}>{children}</button>
    )
}

export default Button;