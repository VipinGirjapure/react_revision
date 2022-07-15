import {useContext} from 'react'
import { Name } from './Parent'
const ChildA = () => {
    const {sendName } = useContext(Name)
    return (
        <>
        <h1>Child A{sendName}</h1>
    
        </>
    )
}

export default ChildA