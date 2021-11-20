import { Suspense, FunctionComponent } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import Blurb from '@components/Blurb';
import { withProfiler } from '@sentry/react';
import Contact from '@components/Contact';
import config from '@config';
import data from '../data/meta';
import { AppWrapper } from './styles';

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
            <Contact />
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
