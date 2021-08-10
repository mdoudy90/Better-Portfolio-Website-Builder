import Document, { Html, Head, Main, NextScript } from 'next/document';

import data from '../src/client/lib/data.json';

const { meta } = data;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={meta.language}>
        <Head>
          <link rel="icon" href={meta.favIcon} />
          <link rel="apple-touch-icon" href={meta.mobileIcon} />
          <script>0</script>
          {/* HACK TO REMOVE FOUC WHEN DEPLOYED */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;