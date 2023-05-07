import React, { useState } from "react";

const StateUplifting = (props) => {
const [name, setName] = useState("")
const handleSubmit = (e) => {
    e.preventDefault()
    props.getData(name)
    // console.log(name)
}
return (
    <div>
        <p>State Uplifting :</p>
        <form action="">
            <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={handleSubmit}>Click me!</button>
            <p>Typed text : {name}</p>
        </form>
    </div>
)
}
export default StateUplifting