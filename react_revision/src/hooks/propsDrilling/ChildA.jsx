import ChildB from "./ChildB"

const ChildA = ({name}) => {
    return (
        <>
        <h1>Child A</h1>
        <ChildB name={"Ben"}/>
        </>
    )
}

export default ChildA