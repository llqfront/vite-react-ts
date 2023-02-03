import React, { Component } from 'react';

type FallbackRender = () => React.ReactElement
// https://react.zcopy.site/docs/error-boundaries.html
// https://blog.csdn.net/qq_56303170/article/details/125239618
interface Props {
  children: React.ReactNode;
  fallbackRender:FallbackRender;
}
interface State {
  hasError: boolean
}
class ErrorBoundary extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error:Error, errorInfo: React.ErrorInfo) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
    console.log("error: " + error);
    console.log("errorInfo: " + JSON.stringify(errorInfo));
    console.log("componentStack: " + errorInfo.componentStack);
  }

  render() {
    const {children,fallbackRender} = this.props;
    const { hasError } = this.state
    if(hasError){
        return fallbackRender()
    }
    return children
  }
}

export default ErrorBoundary;
// export const FullPageErrorFallback = ({error}:{error:Error | null}) => {
//   return(
//       <FullPage>
//           <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
//       </FullPage>
//   )
// }

// function App() {
//   const {user} = useAuth()
//   return (
//     <div className="App">
//       <ErrorBoundary fallbackRender={FullPageErrorFallback}>
//         {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
//       </ErrorBoundary>
//     </div>
//   );
// }
