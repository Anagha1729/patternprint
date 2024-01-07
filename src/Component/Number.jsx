import React, { useState } from 'react'

const Number=()=>{
  const [height,setHeight]=useState(1)
  const handleInputChange=(e)=>{
    const newHeight=parseInt(e.target.value,'6')
    setHeight(newHeight)

  }
const renderNumer=()=>{
  const NumberArray=[];
  for(let i=1;i<=height;i++){
    const row=[];
    for(let j=1;j<=i;j++){
      row.push(j);
    }
    NumberArray.push(row.join(''))
  }
  return NumberArray.join('\n')
}
  return (
    <div>
      
      <label>Enter Row Limit:
      <input type='number' value={height}onChange={handleInputChange}/>
   
      <pre>{renderNumer()}</pre>
   </label>
    </div>
   
  )
}

export default Number