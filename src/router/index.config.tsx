// 如果项目过大，可拆分，一般项目用不上
import React , { Component, Suspense } from 'react';
import { lazy } from '@loadable/component';
import {NavLink,Redirect,Switch,Route} from 'react-router-dom';
// privateRouters
// pageRouters
// mainRouters
// userRouters
// appRouters
// activityRouters
// 一级页面路由
interface PageRouter {
    path: string;
    exact: boolean;
    component: {}; //any
}

const pageRouters:Array<PageRouter> = [
    {
        path:'/',
        exact:true,
        component:lazy(() => import('@/views/Home/')),
    },
    // 用户
    {
        path:'/service/member',
        exact:false,
        component:lazy(() => import('@/views/Member')),
    },
    // 设置
    {
        path:'/service/setting',
        exact:false,
        component:lazy(() => import('@/views/Setting')),
    },
    // 服务
    {
        path:'/service/prodservice',
        exact:false,
        component:lazy(() => import('@/views/ProdService')),
    },
    // 概览
    {
        path:'/service/dashboard',
        exact: true,
        component:lazy(() => import('@/views/Dashboard')),
    },
    // 运营
    {
        path:'/service/operations',
        exact: true,
        component:lazy(() => import('@/views/Operations')),
    },
    // 数据
    {
        path:'/service/dashboard/shop-pv',
        exact: true,
        component:lazy(() => import('@/views/Dashboard/ShopPv')),
    },
    // 登录
    {
        path:'/service/login',
        exact:false,
        component:lazy(() => import('@/views/Account/Login/')),
    },
    // 注册
    {
        path:'/service/register',
        exact:false,
        component:lazy(() => import('@/views/Account/Register/')),
    },
    // {
    //     path:'/soul',
    //     exact:false,
    //     component:lazy(() => import('@/views/Soul/')),
    // },
    // {
    //     path:'/own',
    //     exact:false,
    //     component:lazy(() => import('@/views/Own/')),
    // },
];
// 用户中心路由
const userRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
// 私有路由
const privateRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
// app中的前端页面路由
const appRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
// 活动页面路由
const activityRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
// 无header 无footer 模块路由
const mainRouters:Array<any> = [
    // {
    //     path:'/',
    //     exact:true,
    //     component:lazy(() => import('./views/Home')),
    // },
    // {
    //     path:'/test',
    //     exact:false,
    //     component:lazy(() => import('./views/Test')),
    // },
];
const router = [
    ...pageRouters,
    ...userRouters,
    ...privateRouters,
    ...appRouters,
    ...activityRouters,
    ...mainRouters
]
export default ()=>{
    const newRouter = router.map((item,index)=>(
        <Route
        key={index}
        exact={item.exact}
        path={item.path}
        component={item.component} />
    ))
    // console.log(newRouter)
    return (
        <Suspense fallback={<div className="loading_box"><div className="loading"></div></div>}>
            <Switch>
                {newRouter}
                <Redirect to="/"/>
            </Switch>
        </Suspense>
    )
}
