import React, { Suspense } from 'react';
import Router from '@/router';
import Loading from '@com/Loading'
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = () => (
  <Suspense fallback={<Loading/>}>
      <RouterProvider router={Router} />
  </Suspense>
)
export default App;
