import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { translate } from '../serises/translate'
import { deleteWordInArray } from '../redux/vocabularyArray'

const VocabularyComponent = () => {
  const dispatch = useDispatch()
  
  const vocabularySelector = useSelector((state) => state.vocabularySlice.value)

  useEffect(() => {
  },[vocabularySelector]
  )


  const deleteWord = (index) => {
    dispatch(deleteWordInArray(index))
  }

  return (
    <div className='container'>
      <h1>Vocabulary</h1>
      {
        vocabularySelector.map((el, index) => {
          // translate(el)
          //   .then(res => {
          //     // console.log(res.data.matches[0].translation)
          //   })
          return (
            <div key={index}>
              <p onClick={e => console.log(e.target.textContent)} className='mb-0' >{el}</p>
              <button onClick={() => deleteWord(index)} className='btn btn-sm btn-danger'>Delete</button>
            </div>
          )
        })
      }

    </div>
  )
}

export default VocabularyComponent