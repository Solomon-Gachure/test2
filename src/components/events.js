import React, { useEffect, useState } from 'react'

const Events = () => {

    const [activities,setActivities]=useState({})
    useEffect(()=>{
        fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => setActivities(data))
        .catch(err => console.log(err))
    }, [])



  return (
    <div>
        <p>Feeling bored? <br/> Here are some fun activities to engage in:</p>
    <div>
        <ul>
            <li>{activities.type}</li>
            <li>{activities.activity}</li>
            <li>{activities.participants}</li>

        </ul>
    </div>
    </div>
  )
}

export default Events