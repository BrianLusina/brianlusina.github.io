import { FunctionComponent } from 'react';
import { ErrorBoundary } from '@sentry/react';
import { RouteErrorBoundaryProps } from './RouteErrorBoundary.interface';

/**
 * Route Error Boundary that wraps Route components in an error boundary and captures errors
 * sending them to Sentry.
 * @param {RouteErrorBoundaryProps} props RouteErrorBoundary props
 * @returns ErrorBoundary component wrapped around a Route
 */
const RouteErrorBoundary: FunctionComponent<RouteErrorBoundaryProps> = ({
  location,
  children,
}: RouteErrorBoundaryProps) => {
  return (
    <ErrorBoundary
      beforeCapture={(scope) => {
        scope.setTag('location', location);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RouteErrorBoundary;