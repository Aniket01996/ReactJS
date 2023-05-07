import React from 'react'
import CompB from './CompB'

const CompA = ({data}) => {
  return (
    <div>
      <h3>CompA : </h3>
      <CompB data={data}/>
    </div>
  )
}

export default CompA
