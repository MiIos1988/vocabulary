import React, { useEffect } from 'react'
import { getVerbs } from '../services/getData'

const VerbsComponent = () => {

    useEffect(() => {
        getVerbs().then(res => console.log(res.data))
    }, []
    )
    return (
        <div>
            <h1>Verbs</h1>
        </div>
    )
}

export default VerbsComponent
