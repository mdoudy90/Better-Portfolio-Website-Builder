import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import { store } from '../src/client/redux/store';
import SEO from '../src/client/lib/next-seo.config';
import data from '../src/client/lib/data.json';
import '../styles/main.scss';

const { meta } = data;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={meta.description} />
      </Head>
      <Provider store={store}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <div id="portal-root" />
      </Provider>
    </>
  )
};
