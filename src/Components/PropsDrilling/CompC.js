import React from 'react'
import CompD from './CompD'

const CompC = ({data}) => {
  return (
    <div>
      <h3>CompC : </h3>
      <CompD data={data}/>
    </div>
  )
}

export default CompC
