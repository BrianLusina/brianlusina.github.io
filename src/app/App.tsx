import { Suspense, FunctionComponent, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import Blurb from '@components/Blurb';
import { withProfiler } from '@sentry/react';
import Contact from '@components/ContactForm';
import config from '@config';
import SocialCard from '@components/SocialCard';
import usePageViews from '@hooks/analytics/usePageView';
import analytics from '@analytics';
import { captureException, captureScope, Levels } from '@monitoring';
import { unixTimeStamp } from '@timeUtils';
import notification from '@notification';
import meta from '../data/meta';
import { AppWrapper } from './styles';
// TODO: move this to a CMS to be able to change the data dynamically
import socialItems from '../data/social';

// TODO: move this to a CMS to be able to change the data dynamically
const { pages, siteDescription } = meta;

const App: FunctionComponent = () => {
  usePageViews();
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setError] = useState<Error | null>(null);

  const onSubmitContact = async (data: { name: string; email: string; message: string }) => {
    const { name, email, message } = data;
    try {
      setLoading(true);

      // TODO: send email
      console.log(data);

      analytics.logEvent('contact_form_submit', {
        name,
        email,
        message,
      });

      notification.success('Message sent successfully');
      setLoading(false);
    } catch (error) {
      setError(error as Error);

      captureException(
        error as Error,
        captureScope(
          {
            type: 'contact_form_submit',
            level: Levels.Error,
            message: 'Error sending contact form',
            category: 'contact_form',
            data,
            timestamp: unixTimeStamp(new Date()),
          },
          Levels.Error,
        ),
        `Failed to send contact info. Err: ${(error as Error).message}`,
      );

      notification.error(`Failed to send message. Please try again later`);
    } finally {
      setLoading(false);
    }
  };

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
            {pages.map(({ title, image, description }) => (
              <Blurb key={title} title={title} image={image} description={description} />
            ))}
            <article id="contact">
              <h2 className="major">Contact</h2>
              <Contact onSubmit={onSubmitContact} loading={loading} />
              <SocialCard items={socialItems} />
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
