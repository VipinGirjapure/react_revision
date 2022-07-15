

const Button = ({handleClick,children}) => {
    console.log('Button ' , children)
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default Button;