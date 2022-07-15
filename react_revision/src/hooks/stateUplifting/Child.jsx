const Child = (props) =>{
    return (<>
    child Name {props.name}
    
    <button onClick={()=>props.Alert("Ben")}>Click here</button>
    
    </>)
}

export default Child;