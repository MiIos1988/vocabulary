import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getVerbs } from '../services/getData'

const LearningVerbsComponent = () => {
  const [arrayVerbs, setArrayVerbs] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomString, setRandomString] = useState("run - trčati (rʌn)")
  const [randomWord, setRandomWord] = useState("trčati");
  const [singleWord, setSingleWord] = useState(true);

  useEffect(() => {
    getVerbs().then(res => setArrayVerbs(res.data))
  }, []
  )

  const writeOneWord = (string) => {
    let start_index = string.indexOf("-") + 2;
    let end_index = string.indexOf("(") - 1;
    let b = string.substring(start_index, end_index);
    setRandomWord(b)
  }

  return (
    <div>
      {singleWord ? <div className='d-flex justify-content-center mt-5'>
        <h2>{randomWord}</h2>
        <button className='btn btn-primary ms-5' onClick={() => {
          setSingleWord(false);
          const random = Math.floor(Math.random() * arrayVerbs.length)
          setRandomNumber(random);


        }}>View translate</button>
      </div>
        : <>
          <div className='d-flex justify-content-center mt-5'>
            <h2>{randomString}</h2>
            <button className='btn btn-primary ms-5' onClick={() => {
              const a = arrayVerbs[randomNumber];
              setRandomString(a)
              writeOneWord(a)
              setSingleWord(true)

            }}>Next verb</button>
          </div>
          <input className='form-control m-5' type="text" placeholder='Write a sentence using this verb!' />
        </>
      }

    </div>
  )
}

export default LearningVerbsComponent
