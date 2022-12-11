import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '@/services/pokemon'

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer
})

export default rootReducer;