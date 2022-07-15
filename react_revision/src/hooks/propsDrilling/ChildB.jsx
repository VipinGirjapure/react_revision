import ChildC from "./ChildC"

const ChildB = ({name} ) => {
    return (
        <>
        <h1>Child B </h1>
        <ChildC name={name}/>
        </>
    )
}

export default ChildB