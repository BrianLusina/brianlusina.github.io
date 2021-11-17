import { Suspense, FunctionComponent, lazy } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withProfiler } from '@sentry/react';
import config from '@config';
import { AppWrapper } from './styles';

const Intro = lazy(() => import('@components/Intro'));

const App: FunctionComponent = () => {
  return (
    <>
      <AppWrapper id="wrapper">
        <Header />
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            <TransitionGroup>
              <CSSTransition key="" classNames="fade" timeout={300}>
                <Intro />
              </CSSTransition>
            </TransitionGroup>
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
