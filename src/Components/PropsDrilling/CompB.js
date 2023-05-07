import React from 'react'
import CompC from './CompC'

const CompB = ({data}) => {
  return (
    <div>
        <h3> CompB : </h3>
        <CompC data={data}/>
    </div>
  )
}

export default CompB
