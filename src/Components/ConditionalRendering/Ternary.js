import React from 'react'

const Ternary = () => {
    const consistency = true;
    return (
        <div>
            <p>This is an example of Ternary operator -</p>
            {consistency ?
                <div style={{ color: 'green' }}>You will Suceed</div> :
                <div style={{ color: 'red' }}>You have to try harder</div>}
            <p>This is an example of AND operator -</p>
            {consistency && <div style={{ color: 'green' }}>You are good to go!!</div>}
        </div>
    )
}

export default Ternary
