```ts
// 第一步 新建 store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";

// createApi文档 https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery

const store = configureStore({
  reducer: {
    [globalReducer.reducerPath]: globalReducer.reducer
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// 第二步 新建 store/globalReducer.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const globalReducer = createApi({
   // 这个reducerPath相当于我们 createSlice配置中的name
   reducerPath: 'globalReducer',
   // 配置一些异步请求 fetchBaseQuery是库内置的基于fetch封装的请求方法
   baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    prepareHeaders: (headers, { getState }) => {
      const token = '你的token';
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // 配置你的异步方法
   endpoints: (builder) => {
     return {
       // 定义一个接口
       //从参数生成查询参数 转变响应并且缓存
       //React entry point 会自动根据endpoints生成hooks
       getTodos: builder.query({query: (id) => ({
          method: 'GET',
          url: `/todos/detail/${id}`,
          params: {
             name: 'xxxx'
          }
       })}),
     }
   }
 })

export default globalReducer;

// 第三步 组件中使用 Demo.tsx 
import globalReducer from '../globalReducer'

const Demo = () => {
  // useGetTodosQuery 是根据 第二步中的 endpoints下的 getTodos方法名自动生成的hook
  const { isLoading, data, isError, isSuccess } = globalReducer.useGetTodosQuery(1)
  return <>{isLoading ? <div>loading...</div> : <div>403......</div>}</>;

```


```ts
// 先体验一下不用createApi时如何处理异步请求

// 第一步 创建store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";

const store = configureStore({
  reducer: {
    globalReducer,
  },
});

export default store;

// 这里是处理 useDispatch 和 useSelector没有ts类型提示
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// 第二步 新建 store/globalReducer.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 初始化数据类型
type Props = {
  userInfo: {
    routerList: string[];
    name: string;
    loading: boolean;
  };
};

// 初始化数据
const initialState: Props = {
  userInfo: {
    routerList: [],
    name: "",
    loading: true,
  },
};

// 模拟一个接口 异步请求
const getUserInfo = (params: any): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        routes: ["home", "detail", "list", "404", "home/detail"],
        userName: "jianjian",
      });
    }, 1000);
  });
};

// 通过 createAsyncThunk 创建一个promise的异步方法
export const fetchUserInfo = createAsyncThunk<any>(
  "globalReducer/getUsreInfo",
  async (params, thunkAPI) => {
    const data = await getRoutes(params);
    return data;
  }
);

// 创建一个切片
const globalReducer = createSlice({
  name: "globalReducer",
  initialState,
  reducers: {
    add() {
      console.log(111);
    }
  },
  // 异步请求修改数据的方法(promise)
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.userInfo.loading = true;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.userInfo.loading = false;
      state.userInfo.routerList = action.payload.routes;
      state.userInfo.name = action.payload.name;
    });
  },
});

const { actions, reducer } = globalReducer
export default globalReducer.reducer;

// 第三步 由于使用 useDispatch 和 useSelector 没有ts类型提示，我们重写一些 
// 新建 hooks/index.ts
import { AppDispatch, RootState } from "../store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

/** @description 解决 useDispatch 和 useSelector没有ts类型提示 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 第四步 组件中使用 Demo.tsx
import { useAppSelector } from "../hooks";
const Demo = () => {
  const {
    userInfo: { routerList, loading },
  } = useAppSelector((state) => state.globalReducer);
  return <>{loading ? <div>loading...</div> : <div>403......</div>}</>;
};
export default Demo;

```