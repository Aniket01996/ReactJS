import React from 'react'
import { useState } from 'react'

const HOCComponent = (WrappedComponent) => {
    const HocFunction = () => {
        const [counter, setCounter] = useState(0);

        const updateCounter = () => {
            setCounter(counter + 1)
        }
        return (
            <div>
                <WrappedComponent counter={counter}
                    updateCounter={updateCounter} />
            </div>
        )
    }
    return HocFunction
}
export default HOCComponent
