import React, { Suspense } from 'react';
import { lazy } from '@loadable/component';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Loading from '@com/Loading'

const Home = lazy(() => import('@/views/Home/'))
const Member = lazy(() => import('@/views/Member'))
const Setting = lazy(() => import('@/views/Setting'))
const ProdService = lazy(() => import('@/views/ProdService'))
const Operations = lazy(() => import('@/views/Operations'))

const NotFound = lazy(() => import('@/views/NotFound'))

const Login = lazy(() => import('@/views/Account/Login'))
const Register = lazy(() => import('@/views/Account/Register'))

const Dashboard = lazy(() => import('@/views/Dashboard'))
const ShopPv = lazy(() => import('@/views/Dashboard/ShopPv'))

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home/>
  },
  // 用户
  {
    path: "/service/member",
    index: true,
    element: <Member/>
  },
  // 设置
  {
    path: "/service/setting",
    index: true,
    element: <Setting/>
  },
  // 服务
  {
    path: "/service/prodservice",
    index: true,
    element: <ProdService/>
  },
  // 运营
  {
    path: "/service/operations",
    index: true,
    element: <Operations/>
  },
  // 概览
  {
    path: "/service/dashboard",
    index: true,
    element: <Dashboard/>
  },
  // 数据
  {
    path: "/service/dashboard/shop-pv",
    index: true,
    element: <ShopPv/>
  },
  // 登录
  {
    path: "/service/login",
    index: true,
    element: <Login/>
  },
  // 注册
  {
    path: "/service/register",
    index: true,
    element: <Register/>
  },
  // 404
  {
    path: "*",
    index: true,
    element: <NotFound/>
  },
]);

export default () => (
    <>
      <Suspense fallback={<Loading/>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
)