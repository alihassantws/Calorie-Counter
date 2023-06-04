import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import { generateImagesThunk } from 'app/services/asyncThunks/images/open_ai'

interface ImagesState {
  image: string
  error: any
  loading: boolean
  lastImageQuery: string
  imagesHistory: Array<string>
}

const initialState: ImagesState = {
  loading: false,
  error: false,
  image: '',
  imagesHistory: [],
  lastImageQuery: '',
}

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    reset() {
      return initialState
    },
  },
  extraReducers(builder) {
    builder.addCase(generateImagesThunk.fulfilled, (state, { payload }) => {
      state.loading = false
      state.lastImageQuery = payload?.prompt
      state.image = payload?.data?.[0]?.url || ''
      return state
    })
    builder.addCase(generateImagesThunk.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
      return state
    })
    builder.addCase(generateImagesThunk.pending, (state) => {
      state.loading = true
      return state
    })
  },
})

export const { reset } = imagesSlice.actions

export const selectImages = (state: RootState) => state.images

export default imagesSlice.reducer
