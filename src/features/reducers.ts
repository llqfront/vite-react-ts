import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '@/services/pokemon'
import { todoApi } from '@/services/todo'

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [todoApi.reducerPath]: todoApi.reducer,
})

export default rootReducer;