import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    vocabularyArrayFun(state, action) {
      state.value = action.payload
    },
    deleteWordInArray(state, action) {
      state.value.splice(action.payload, 1);
    }

  },
})

export const { vocabularyArrayFun, deleteWordInArray } = vocabularySlice.actions
export default vocabularySlice.reducer