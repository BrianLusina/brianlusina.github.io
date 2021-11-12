import { Suspense, FunctionComponent } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import Menu from '@components/menu';
import Footer from '@components/footer';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollToTop from '@components/scrolltotop';
import { withProfiler } from '@sentry/react';
import config from '@config';
import LayoutWrapper from '@layouts/LayoutWrapper';
import AppRoutes from '../routes/AppRoutes';
import { AppWrapper } from './styles';

const App: FunctionComponent = () => {
  const location = useLocation();

  return (
    <LayoutWrapper>
      <AppWrapper id="wrapper">
        <MainLayout>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <TransitionGroup>
              <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <AppRoutes />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </MainLayout>
        <Footer>
          <ContactContainer />
          <SocialCard />
        </Footer>
      </AppWrapper>
      <Menu items={config.menuItems} />
    </LayoutWrapper>
  );
};

// Profiler
// Ref: https://docs.sentry.io/platforms/javascript/guides/react/components/profiler/
export default withProfiler(App, { name: config.name });
