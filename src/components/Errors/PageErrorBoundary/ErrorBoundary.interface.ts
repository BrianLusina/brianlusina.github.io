import { ReactChildren, ReactElement, ReactNode } from 'react';

export type ErrorBoundaryProps = {
  children: ReactChildren | ReactElement | ReactNode;
};

export type ErrorBoundaryState = {
  error: Error | null;
  hasError: boolean;
};
