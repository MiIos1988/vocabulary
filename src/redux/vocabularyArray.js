import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    vocabularyArray(state, action) {
        state.value = [...state.value, action.payload]
    },
    
  },
})

export const { vocabularyArray} = vocabularySlice.actions
export default vocabularySlice.reducer