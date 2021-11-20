import { Suspense, FunctionComponent, lazy } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import { withProfiler } from '@sentry/react';
import config from '@config';
import data from '../data/meta';
import { AppWrapper } from './styles';

const Blurb = lazy(() => import('@components/Blurb'));

const App: FunctionComponent = () => {
  return (
    <>
      <AppWrapper id="wrapper">
        <Header navItems={data.map(({ title }) => ({ title: title.toLowerCase() }))} />
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            {data.map(({ title, description }) => (
              <Blurb key={title} title={title} description={description} />
            ))}
          </Suspense>
        </MainLayout>
        <Footer />
      </AppWrapper>
      <div id="bg" />
    </>
  );
};

// Profiler
// Ref: https://docs.sentry.io/platforms/javascript/guides/react/components/profiler/
export default withProfiler(App, { name: config.name });
