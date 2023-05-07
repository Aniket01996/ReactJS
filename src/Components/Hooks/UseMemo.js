import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
    const [add, setAdd] = useState(0)
    const [sub, setSub] = useState(0)

    const multiplication = useMemo(function multi() {
        console.log("***")
        return add * 10
    }, [add])
    return (
        <div>
            <p>OptMemo : {multiplication} </p>
            <h3>Increment : {add}</h3>
            <h3>Decrement : {sub}</h3>
            <button onClick={()=>{setAdd(add+1)}}>Increment !</button>
            <button onClick={()=>{setSub(sub-1)}}>Decrement !</button>
        </div>
    )
}

export default UseMemo
