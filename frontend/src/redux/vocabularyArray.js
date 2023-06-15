import { createSlice } from '@reduxjs/toolkit'

const initialState = { vocabulary: [], verbs: [] }

const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    vocabularyArrayFun(state, action) {
      state.vocabulary = action.payload
    },
    deleteWordInArray(state, action) {
      state.vocabulary.splice(action.payload, 1);
    },
  },
})

export const { vocabularyArrayFun, deleteWordInArray } = vocabularySlice.actions
export default vocabularySlice.reducer