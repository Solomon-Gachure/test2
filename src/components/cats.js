import React, { useEffect, useState } from 'react'

const Cats = () => {
 
    const [cats,setCats]=useState({})
    useEffect(()=>{
        fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => setCats(data))
        .catch(err => console.log(err))
    }, [])



  return (
    <div>
        <p>Get right facts about cats</p>
        <div>
            <ul>
                <li>{cats.fact}</li>
            </ul>
        </div>
    </div>
  )
}

export default Cats