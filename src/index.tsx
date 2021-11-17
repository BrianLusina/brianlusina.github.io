import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { initializeMonitoring } from '@monitoring';
import config from '@config';
import ErrorBoundary from '@components/Errors/PageErrorBoundary';
import GraphqlProvider from './providers/graphql/GraphQlProvider';
import GraphqlClient from './api/graphql/GraphQlClient';
import App from './app';
import reportWebVitals from './reportWebVitals';
import '@scss/main.scss';

initializeMonitoring();

ReactDOM.render(
  <StrictMode>
    <GraphqlProvider client={GraphqlClient}>
      <Helmet titleTemplate={`${config.title} | %s `} defaultTitle={`${config.title}`} />
      <ErrorBoundary>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </GraphqlProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
