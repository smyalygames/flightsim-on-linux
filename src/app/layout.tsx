import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import type { ReactNode } from 'react';
import type { Metadata } from 'next'
import Image from 'next/image';
// Required for theme styles, previously was imported under the hood
import './globals.css';

export const metadata: Metadata = {
  description: 'Guides to running Flight Simulators on Linux',
  metadataBase: new URL('https://flightsimonlinux.com'),
  title: {
    absolute: '',
    template: '%s | Flight Sim on Linux',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
};

const navbar = (
  <Navbar
    logo={
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
    }
    projectLink="https://github.com/smyalygames/flightsim-on-linux"
  />
);
const footer = (
  <Footer className="flex-col items-center md:items-start">
    © Anthony Berg {new Date().getFullYear()}
  </Footer>
);

export default async function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/smyalygames/flightsim-on-linux/tree/main/src"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
};
