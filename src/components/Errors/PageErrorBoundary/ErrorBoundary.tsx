import { Component, ReactChildren, ReactElement, ErrorInfo, ReactNode } from 'react';
import { captureAndLogError } from '@monitoring';
import AppError from '../AppError';
import { ErrorBoundaryState, ErrorBoundaryProps } from './ErrorBoundary.interface';

/**
 * A reusable component for handling errors in a React (sub)tree.
 * This will be the global error boundary for the application.
 * Errors that are not captured by sub level components will bubble up to here and be reported to a monitoring service.
 */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    captureAndLogError(error, errorInfo);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  render(): ReactChildren | ReactElement | ReactNode {
    const { children } = this.props;
    const { error, hasError } = this.state;

    if (error && hasError) {
      return <AppError />;
    }
    return children;
  }
}
