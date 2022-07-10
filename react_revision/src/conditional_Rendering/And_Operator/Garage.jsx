const Garage = (props) =>{
    const cars = props.Cars
    // console.log(cars)
    return (
        <>
        <h1>Garage</h1>
        {cars.length > 0 && <h2>cars Array length is {cars.length}</h2> }
        </>
    )
}

export default Garage;