import React, { createContext } from 'react'
import CompoD from './CompoD'

// Create a context object
const context = createContext()

const CompoA = () => {
    const greeting = "Hello World !"
  return (
    <div>
      <h3>CompoA : {greeting}</h3>
      <context.Provider value={greeting}>
        <CompoD/>
      </context.Provider>
    </div>
  )
}
export default CompoA
export {context}
