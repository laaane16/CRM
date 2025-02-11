import React, { ErrorInfo, lazy, Suspense } from 'react';

const ErrorPage = lazy(() => import('../../../pages/ErrorPage'));

interface Props {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="Загрузка">
          <ErrorPage />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
