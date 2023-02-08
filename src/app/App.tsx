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
import useGetBlurbs from '@hooks/useGetBlurbs';
import { AppWrapper, Article } from './styles';

const App: FunctionComponent = () => {
  usePageViews();
  const { loading, data: blurbs } = useGetBlurbs();

  return (
    <>
      <AppWrapper id="wrapper">
        <Header
          title={config.title}
          navItems={blurbs.map(({ title }) => ({ title: title.toLocaleLowerCase() }))}
        />
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              blurbs.map(({ title, image: { url }, description }) => (
                <Article key={title} id={title.toLowerCase()}>
                  <Blurb key={title} title={title} image={url} description={description} />
                </Article>
              ))
            )}
            <Article id="contact">
              <h2 className="major">Contact</h2>
              <ContactForm />
              <SocialCard />
            </Article>
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
