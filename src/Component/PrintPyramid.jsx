import React, { useState } from 'react';

const PrintPyramid=()=>{

 const[height,setHeight]=useState(1)
  const handleInputChange=(e)=>{
    const newHeight=parseInt(e.target.value)
    setHeight(newHeight)
 }

  const renderPyramid = () => {
    const PyramidArray =[];
    for (let i= 1; i <= height; i++) {
      const row = [];
      for (let j = 1; j <= i; j++) {
        row.push('*');
      }
      PyramidArray.push(row.join(' '));
    }
    return PyramidArray.join('\n');
  };
 
  return(
    <div>
    <label>Enter Row Limit:
    <input type='number' value={height}onChange={handleInputChange}/>
 
 <pre>{renderPyramid()}</pre>
 </label>
   </div>
    
  ) 
  
}

export default PrintPyramid;