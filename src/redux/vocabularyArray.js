import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    vocabularyArrayFun(state, action) {
        state.value = action.payload
    },
    
  },
})

export const { vocabularyArrayFun} = vocabularySlice.actions
export default vocabularySlice.reducer