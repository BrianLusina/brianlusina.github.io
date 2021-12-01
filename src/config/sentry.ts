export default {
  sentryDsn: process.env.SENTRY_DSN || window._env_.SENTRY_DSN || '',
  tracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE || 0.5,
};
