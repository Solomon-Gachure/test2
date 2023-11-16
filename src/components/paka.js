import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Paka = () => {
 
    const[paka,setPaka]=useState({})
    useEffect(()=>{
        axios.get('https://catfact.ninja/fact')
        .then(res =>(setPaka(res.data)))
        .catch(err=>console.log(err))
    }, [])




  return (
    <div>
        <p>Get fun facts about cats:</p>
        <div>
{paka.fact}
        </div>
    </div>
  )
}

export default Paka