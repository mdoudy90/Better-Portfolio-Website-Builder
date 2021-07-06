import { Provider } from 'react-redux';

import { store } from '../src/client/redux/store';
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <div id="portal-root" />
    </Provider>
  )
}

export default MyApp
