import React from 'react'
import { useSelector } from 'react-redux'

const VocabularyComponent = () => {
    const vocabularySelector = useSelector((state) => state.vocabularySlice.value)
    console.log(vocabularySelector)
  return (
    <div className='container'>
      <h1>Working111</h1>
    </div>
  )
}

export default VocabularyComponent