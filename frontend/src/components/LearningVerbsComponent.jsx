import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getVerbs } from '../services/getData'

const LearningVerbsComponent = () => {
    const [arrayVerbs, setArrayVerbs ] = useState([])

    useEffect(() => {
        getVerbs().then(res => setArrayVerbs(res.data))
    }, []
    )
    
  return (
    <div>
      <h1>{arrayVerbs[15]}</h1>
    </div>
  )
}

export default LearningVerbsComponent
