import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import Image from 'next/image';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  project: {
    link: 'https://github.com/smyalygames/flightsim-on-linux',
  },
  docsRepositoryBase:
    'https://github.com/smyalygames/flightsim-on-linux/blob/main',
  logo: (
    <>
      <Image
        src={'/logo_t.png'}
        alt={'Logo with Tux throwing a paper airplane'}
        width={75}
        height={54}
        style={{ paddingRight: '0.75em' }}
      />
      <span>Flight Sim on Linux</span>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Flight Sim on Linux',
    };
  },
  head: () => {
    // TODO Figure out the reason for these ESLint errors
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath, defaultLocale, locale } = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();
    const url =
      'https://www.flightsimonlinux.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link
          rel={'icon'}
          type={'image/png'}
          href={'/favicon/favicon512.png'}
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || 'Flight Sim on Linux'}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            'Guides to running Flight Simulators on Linux'
          }
        />
        <meta property={'og:image'} content={'/logo_t.png'} />
      </>
    );
  },
  footer: {
    text: <span>© Anthony Berg {new Date().getFullYear()}</span>,
  },
};
