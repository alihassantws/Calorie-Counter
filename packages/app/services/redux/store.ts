import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import userReducer from './reducers/userReducer'
import authSlice from './reducers/authSlice'
import limitReducer from './reducers/limitSlice'
import imagesReducer from './reducers/imagesSlice'
import discoverReducer from './reducers/discoverSlice'
import onboardingReducer from './reducers/onboardingSlice'
import subscriptionReducer from './reducers/subscriptionSlice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'auth', 'onboarding'],
  // blacklist: ['user', 'auth', 'onboarding'],
}

const reducers = combineReducers({
  user: userReducer,
  auth: authSlice,
  limit: limitReducer,
  images: imagesReducer,
  discover: discoverReducer,
  onboarding: onboardingReducer,
  subscription: subscriptionReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    ]

    return middlewares
  },
})

const persistor = persistStore(store)

export { store, persistor }
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
