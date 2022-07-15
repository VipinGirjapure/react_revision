import {useContext} from 'react'
import { Name } from './Parent'

const ChildC = () => {
    const {sendName} = useContext(Name)
    return (
        <>
        <h1>Child C name is {sendName}</h1>
        
        </>
    )
}

export default ChildC