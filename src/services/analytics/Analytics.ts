import {
  logEvent,
  getAnalytics,
  Analytics as FirebaseAnalytics,
  EventParams,
  CustomEventName,
} from 'firebase/analytics';
import firebaseApp from '@services/firebase';

/**
 * Analytics Service.
 * This will handle all analytics events.
 * This could be a wrapper around any analytics library.
 */
export class Analytics {
  private analytics: FirebaseAnalytics;

  constructor() {
    this.analytics = getAnalytics(firebaseApp);
  }

  logEvent(eventName: CustomEventName<string>, eventParams?: EventParams): void {
    logEvent(this.analytics, eventName, eventParams);
  }
}

export default new Analytics();
