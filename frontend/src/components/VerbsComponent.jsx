import React, { useEffect, useState } from 'react'
import { getVerbs } from '../services/getData'

const VerbsComponent = () => {
    const [arrayVerbs, setArrayVerbs ] = useState([])

    useEffect(() => {
        getVerbs().then(res => setArrayVerbs(res.data))
    }, []
    )
   return  arrayVerbs && arrayVerbs.map((verbs, index) => {
        return(
            <div className='bg-light' key={index}>
                <p className='text-center fs-5'>{verbs}</p>
                <hr />
            </div>
        )
    })
}

export default VerbsComponent
