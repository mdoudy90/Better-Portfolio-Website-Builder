import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';

import { store } from '../src/client/redux/store';
import SEO from '../src/client/lib/next-seo.config';
import '../styles/main.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <div id="portal-root" />
    </Provider>
  )
};
