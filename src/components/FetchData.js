import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const [joke, setJoke]=useState({})
    useEffect(()=>{
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => setJoke (data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <p>Hey there, this is a web app for programming jokes.</p>
        <div>
            <ul>
                <li>{joke.setup}</li>
                <li>{joke.punchline}</li>
   </ul>
        </div>
    </div>
  )
}

export default FetchData