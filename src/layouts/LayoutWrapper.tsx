import { ReactNode, FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import Header from '@components/header';
import Menu from '@components/menu/Menu';
import Sidebar from '@components/Sidebar';
import favicon from '@assets/icons/favicon.png';

type SocialLink = {
  name: string;
  link: string;
};

type Page = {
  title: string;
  description: string;
};

type LayoutWrapperProps = {
  children: ReactNode;
  siteTitle: string;
  displaySidebar?: boolean;
  page: Page;
  tag: string;
  town: string;
  country: string;
  email: string;
  emailAlias: string;
  about: string;
  socialLinks: SocialLink[];
  miniPosts: any;
};

const LayoutWrapper: FunctionComponent<LayoutWrapperProps> = ({
  children,
  displaySidebar,
  siteTitle,
  page,
  tag,
  about,
  socialLinks,
  town,
  country,
  email,
  emailAlias,
  miniPosts,
}: LayoutWrapperProps) => {
  const { title, description } = page;
  return (
    <>
      <Helmet
        title={title ? `${title} | ${siteTitle}` : siteTitle}
        meta={[
          { name: 'description', content: 'LJournal, a simple blog' },
          {
            name: 'keywords',
            content: 'data, Lusina, Brian Lusina, code, bugs, algorithms',
          },
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <div id="wrapper">
        <Header />
        <Menu />
        <div id="main">{children}</div>
        {displaySidebar && (
          <Sidebar
            miniPosts={miniPosts}
            about={about}
            socialLinks={socialLinks}
            contact={{
              town,
              country,
              email,
              emailAlias,
            }}
            pageDesc={description}
            tag={tag}
          />
        )}
      </div>
    </>
  );
};

export default LayoutWrapper;
