import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';

import { store } from '../src/client/redux/store';
import SEO from '../lib/next-seo.config';
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <div id="portal-root" />
    </Provider>
  )
}

export default MyApp
