import React, { useState } from 'react'

const TextareaComponent = () => {
    const [enterText, setEnterText] = useState('');
  return (
    <div>
        <h1>Enter text:</h1>
      <textarea name="enterText" onChange={e => setEnterText(e.target.value) } cols="100" rows="30"></textarea><br />
      <button onClick={() => console.log(enterText)}>Set</button>
    </div>
  )
}

export default TextareaComponent
