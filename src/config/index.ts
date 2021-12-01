import api from './api';
import env from './env';
import firebase from './firebase';
import sentry from './sentry';

export default {
  api,
  name: process.env.NAME || 'Lusina',
  title: process.env.TITLE || 'Fenestra',
  env,
  firebase,
  sentry,
};