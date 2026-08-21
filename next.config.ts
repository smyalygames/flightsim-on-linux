import nextra from 'nextra';

const withNextra = nextra({});

export default withNextra({
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.tsx',
    },
  },
  async redirects() {
    return [
      {
        source: '/msfs/utils/navigraphHub',
        destination: '/msfs/utils/navigraph-hub',
        permanent: true,
      },
      {
        source: '/msfs/utils/navigraphSimlink',
        destination: '/msfs/utils/navigraph-simlink',
        permanent: true,
      },
    ];
  },
});
