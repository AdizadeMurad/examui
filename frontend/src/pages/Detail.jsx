import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
    useEffect(() => {
        datalars()
      }, [])
    
      const [mydata, setmydata] = useState([])
    
      const { id } = useParams()
    
    
      async function getAllproducts() {
        const res = await fetch("http://localhost:3000/products/"+id)
        const data = await res.json()
        return data
      }
    
    
      async function datalars() {
        const datalar = await getAllproducts(id)
        setmydata(datalar)
      }
    
    
  return (
<>


<div>
    <h2>{mydata.date}</h2>
    <p>{mydata.text}</p>
</div>


</>  
)
}

export default Detail