import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import type { PreloadedState } from '@reduxjs/toolkit'
import { pokemonApi } from '@/services/pokemon'
import { todoApi } from '@/services/todo'
import rootReducer from '@/features/reducers'
// import counterReducer from '@/features/counter/counterSlice';
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
// })
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(pokemonApi.middleware,todoApi.middleware),
    preloadedState,
  })
}
setupListeners(setupStore().dispatch)
// export type AppDispatch = typeof setupStore().dispatch;
// export type RootState = ReturnType<typeof setupStore().getState>;
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default setupStore
