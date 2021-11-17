/**
 * Custom Logger Service. This can be extended to capture logs/errors in application.
 * This should ideally not be used for analytics/metrics. These can be handled separately.
 *
 * Here Sentry can be used.
 * Or LogRocket can be used.
 * Or a custom Logger Service can be used.
 *
 * This has been configured with Sentry; But can be interchanged with something else
 * Reference https://docs.sentry.io/platforms/javascript/guides/react/
 */

import * as Sentry from '@sentry/react';
import { ErrorInfo } from 'react';
import { Scope } from '@sentry/react';
import { Integrations } from '@sentry/tracing';
// import log from '@log';

const { NODE_ENV, SENTRY_DSN, ENV } = process.env;

/**
 * Initializes monitoring service
 */
export const initializeMonitoring = (): void => {
  if (NODE_ENV === 'production' || ENV === 'production') {
    // log.info('Initializing Monitoring');
    // configuration options can be found here as well
    // ref: https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/
    Sentry.init({
      // eslint-disable-next-line no-underscore-dangle
      dsn: SENTRY_DSN,
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 0.3,
      debug: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test',
      beforeSend(event: Sentry.Event): Sentry.Event | null {
        // Modify the event here
        if (event.user) {
          // Don't send user's email address
          // eslint-disable-next-line no-param-reassign
          delete event.user.email;
        }
        return event;
      },
    });
  }
};

/**
 * capture and log any errors caught
 * @param error error in stacktrace
 * @param errorInfo Error information from React
 */
export const captureAndLogError = (error: Error, errorInfo: ErrorInfo): void => {
  Sentry.withScope((scope: Scope) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    scope.setExtras(errorInfo);
    captureException(error, scope, error.message);
  });
};

/**
 * Capture exception
 * @param {Error} error Error context
 */
export const captureException = (
  error: Error,
  scope?: Scope,
  errorMessage = 'Error Caught',
): void => {
  Sentry.captureMessage(errorMessage, scope);
  Sentry.captureException(error);
};
