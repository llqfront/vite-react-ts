// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from './types'
// Define a service using a base URL and expected endpoints
/****
 * https://blog.csdn.net/weixin_45625609/article/details/126371290
 * 走的代理开发
 * step1
 * src/features/reducers.ts
 *  import { todoApi } from '@/services/todo'
 *  [todoApi.reducerPath]: todoApi.reducer,
 *  
 */
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getAdvertise: builder.query<Pokemon, string>({
      query: (name) => `${name}`,
    }),
  }),
})
// useGetAdvertiseQuery
// export const pokemonApi()
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi
// export default pokemonApi;