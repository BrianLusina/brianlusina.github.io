import { ReactNode } from 'react';

export type RouteErrorBoundaryProps = {
  /**
   * Location/path of the route
   */
  location: string;
  children: ReactNode;
};