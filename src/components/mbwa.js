import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Mbwa = () => {
const [mbwa,setMbwa]=useState({})
useEffect(()=>{
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res=> (setMbwa(res.data)))
    .catch(err => console.log(err))
}, [])
  return (
    <div>
        <p>Dog pictures</p>
        <div>
            {mbwa.message}
        </div>
    </div>
  )
}

export default Mbwa