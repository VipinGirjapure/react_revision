const Child = (props ) => {
    return (
        <>
        <h1> NAME : {props.data.Name}</h1>
        <h1> SURNAME : {props.data.lastName}</h1>
        </>
    )
}

export default Child;