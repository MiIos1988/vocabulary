import React, { useState } from 'react'

const TextareaComponent = () => {
    const [enterText, setEnterText] = useState('');

    const makeArray = () => {
       const arrayText = enterText.split(" ");
       const filterText = arrayText.filter(el => el.length > 3)
       const uniqueText = [...new Set(filterText)]
       console.log(uniqueText);
    }

  return (
    <div>
        <h1>Enter text:</h1>
      <textarea name="enterText" onChange={e => setEnterText(e.target.value) } cols="100" rows="30"></textarea><br />
      <button onClick={makeArray}>Set</button>
    </div>
  )
}

export default TextareaComponent
