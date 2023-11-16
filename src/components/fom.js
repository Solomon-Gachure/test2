import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Fom = () => {
const[fom,setFom]=useState({})
useEffect(()=>{
    axios.get('https://www.boredapi.com/api/activity')
    .then(res => setFom(res.data))
    .catch(err => console.log(err))
})


  return (
    <div>
        <p>Feeling bored? <br/> Here are some fun activities to engage in:</p>
    <div>
        <ul>
            <li>{fom.type}</li>
            <li>{fom.activity}</li>
            <li>{fom.participants}</li>

        </ul>
    </div>
    </div>
  )
}

export default Fom