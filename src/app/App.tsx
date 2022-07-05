import { Suspense, FunctionComponent } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import Blurb from '@components/Blurb';
import { withProfiler } from '@sentry/react';
import ContactForm from '@components/ContactForm';
import config from '@config';
import SocialCard from '@components/SocialCard';
import usePageViews from '@hooks/analytics/usePageView';
import meta from '../data/meta';
import { AppWrapper } from './styles';

// TODO: move this to a CMS to be able to change the data dynamically
const { pages } = meta;

const siteDescription =
  '<p>/fɪˈnɛstrə/<br/>Window in Latin <br /> <br /> Welcome! <br /> <br />Window into where I doodle, color and build engines with legos and sometimes crayons</p>';

const App: FunctionComponent = () => {
  usePageViews();

  return (
    <>
      <AppWrapper id="wrapper">
        <Header
          title={config.title}
          description={siteDescription}
          navItems={pages.map(({ title }) => ({ title: title.toLowerCase() }))}
        />
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            <Blurb />
            <article id="contact">
              <h2 className="major">Contact</h2>
              <ContactForm />
              <SocialCard />
            </article>
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
