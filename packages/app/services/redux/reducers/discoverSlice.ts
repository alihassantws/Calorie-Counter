import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../app'

interface DiscoverState {
  items: any
}

const initialState: DiscoverState = {
  items: [],
}

export const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    reset() {
      return initialState
    },
    setDiscoverItems(state, actions) {
      state.items = actions.payload
    },
  },
})

export const { reset, setDiscoverItems } = discoverSlice.actions

export const selectDiscover = (state: RootState) => state.discover

export default discoverSlice.reducer
