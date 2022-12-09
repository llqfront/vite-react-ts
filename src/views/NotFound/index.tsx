import  React, { memo } from 'react';
import { useRouteError } from "react-router-dom";

const NotPound = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className="error_page">
      <div className="iconfont icon-152error40401"></div>
    </div>
  );
}
export default NotPound;