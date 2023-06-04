import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

interface AuthState {
  isAuthenticated: boolean
  googleToken: string
  user: any
  userCreations: any
}

const initialState: AuthState = {
  isAuthenticated: false,
  googleToken: '',
  user: {},
  userCreations: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetUser() {
      return initialState
  },
    setUserCreation(state, action) {
      state.userCreations = action.payload
    },
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    setGoogleAuth: (state, action) => {
      if (action.payload) {
        console.log(action.payload,"PAYYY")
        state.isAuthenticated = true
        state.user = action.payload
        console.log(state.user,"USERRR")
      }
    },
    setAppleAuth: (state, action) => {
      if (action.payload) {
        state.isAuthenticated = true
        state.user = action.payload
      }
    },
    logout: () => {
      return initialState
    },
  },
})

export const {
  setUserCreation,
  setAuthentication,
  setGoogleAuth,
  setAppleAuth,
  logout,
  resetUser,
} = authSlice.actions

export const selectAuth = (state: RootState) => state.root.auth.isAuthenticated
export const selectAuthSlice = (state: RootState) => state.root.auth

export default authSlice.reducer
