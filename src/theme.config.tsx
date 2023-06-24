import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default {
  project: {
    link: 'https://github.com/smyalygames/flightsim-on-linux',
  },
  docsRepositoryBase: 'https://github.com/smyalygames/flightsim-on-linux/blob/main',
  logo: <span>Flight Sim on Linux</span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Flight Sim on Linux'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = 'https://www.flightsimonlinux.com' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Flight Sim on Linux'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Guides to running Flight Simulators on Linux'}
        />
      </>
    )
  },
  footer: {
    text: (
      <span>
        © Anthony Berg {new Date().getFullYear()}
      </span>
    )
  }
}
