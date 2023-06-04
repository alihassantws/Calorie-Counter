import { createSlice } from '@reduxjs/toolkit'

interface State {
  user: string
}

const initialState: State = {
  user: '',
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userReducer.actions

export default userReducer.reducer
