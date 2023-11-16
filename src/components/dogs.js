import React, { useEffect, useState } from 'react'

const Dogs = () => {
const [dogs,setDogs]=useState({})
useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => setDogs(data))
    .catch(err => console.log(err))
}, [])



  return (
    <div>
        <p>Get fun facts about dogs:</p>
        <div>
            <ul>
                <li>{dogs.message}</li>
            </ul>
        </div>
    </div>
  )
}

export default Dogs