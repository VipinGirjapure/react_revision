import Child from "./Child";

const Parent = () => {
    const data = "Vipin"
    const pAlert = (Name) =>{
        console.log("pAlert",Name)
    } 
    return (
        <>
        <Child name={data} Alert={pAlert}/>
        </>
    )
}

export default Parent;