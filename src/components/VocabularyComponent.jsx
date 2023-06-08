import { createSelector } from '@reduxjs/toolkit'
import React from 'react'

const VocabularyComponent = () => {
    const vocabularySelector = createSelector((state) => state.vocabularyArray)
    console.log(vocabularySelector)
  return (
    <div className='container'>
      <h1>Working111</h1>
    </div>
  )
}

export default VocabularyComponent