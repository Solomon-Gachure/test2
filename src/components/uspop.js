import React, { useEffect, useState } from 'react'

const Uspop = () => {
const[pop,setPop]=useState({})
useEffect(()=>{
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(response => response.json())
    .then(data => setPop(data))
    .catch(err => console.log(err))
},[])


  return (
    <div>
        <p>Get true facts about US population:</p>
        <div>
            <ul>
                <li>{pop.data && pop.data.Population}</li>
                <li>{pop.source && pop.source.name}</li>
           
            </ul>
        </div>
    </div>
  )
}

export default Uspop