import { useSelector } from 'react-redux';
import Link from 'next/link';

import Layout from '../src/client/components/Layout';
import ThemeBar from '../src/client/components/ThemeBar';

export default function Custom404() {
  const theme = useSelector((state) => state.settings.theme);

  return (
    <div className={`theme--${theme}`}>
      <main className="main custom-404" id="main">
        <Layout>
          <h1>Page Not Found</h1>
          <Link href='/'>
            <button>Return Home</button>
          </Link>
        </Layout>
        <ThemeBar />
      </main>
    </div>
  );
}
