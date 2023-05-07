import React, { useContext } from 'react'
import { context } from './CompoA'

const CompoD = () => {
    // Use the context object to access the data passed down from CompA
    const Context = useContext(context)
    return (
        <div>
            <h3>CompoD : Received our data from CompoA : {Context}</h3>
        </div>
    )
}
export default CompoD
