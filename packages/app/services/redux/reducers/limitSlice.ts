import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../app'

interface LimitState {
  limit: number
  lastAppOpenDate: any
}

const initialState: LimitState = {
  limit: 1,
  lastAppOpenDate: undefined,
}

export const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    reset() {
      return initialState
    },
    reduceLimit(state) {
      state.limit = 0
    },
    appOpen(state, action) {
      state.lastAppOpenDate = action.payload
      state.limit = 1
    },
  },
})

export const { reset, appOpen, reduceLimit } = limitSlice.actions

export const selectLimit = (state: RootState) => state.limit

export default limitSlice.reducer
