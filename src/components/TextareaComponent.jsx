import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import vocabularyArray from '../redux/vocabularyArray';

const TextareaComponent = () => {
    const [enterText, setEnterText] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const makeArray = () => {
       const arrayText = enterText.split(" ");
       const filterText = arrayText.filter(el => el.length > 3)
       const uniqueText = [...new Set(filterText)]
       dispatch(vocabularyArray(uniqueText))
       navigate("/vocabulary")
    }

  return (
    <div className='container'>
        <h1>Enter text:</h1>
      <textarea className='form-control' name="enterText" onChange={e => setEnterText(e.target.value) } cols="100" rows="25"></textarea><br />
      <button className='btn btn-primary form-control' onClick={makeArray}>Set</button>
    </div>
  )
}

export default TextareaComponent
