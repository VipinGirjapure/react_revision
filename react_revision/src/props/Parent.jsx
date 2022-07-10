import Child from "./Child"

const Parent = () => {
    const data = {
        Name : "Vipin",
        lastName : "Girjapure"
    }
    return (
        <>
        <Child data = {data}/>
        </>
    )
}

export default Parent ;