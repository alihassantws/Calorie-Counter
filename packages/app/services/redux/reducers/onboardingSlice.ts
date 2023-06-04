import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

interface OnboardingState {
  visited: boolean
}

const initialState: OnboardingState = {
  visited: false,
}

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboardingVisit: (state, action: PayloadAction<boolean>) => {
      state.visited = action.payload
    },
  },
})

export const { setOnboardingVisit } = onboardingSlice.actions

export const selectOboarding = (state: RootState) =>
  state.root.onboarding.visited

export default onboardingSlice.reducer
