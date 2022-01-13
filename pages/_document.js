import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../src/client/lib/gtag';
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

          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
          {!!process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID && (
            <script dangerouslySetInnerHTML={{
                    __html: `
                    window.OneSignal = window.OneSignal || [];
                    OneSignal.push(function() {
                      OneSignal.init({
                        appId: "${process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID}",
                        safari_web_id: "",
                        notifyButton: {
                          enable: true,
                        },
                        promptOptions: {
                            slidedown: {
                              prompts: [
                                {
                                  type: "email",
                                  autoPrompt: true,
                                  text: {
                                    "acceptButton": "Submit",
                                    "cancelButton": "No Thanks",
                                    "actionMessage": "Add your email and I'll reach out!",
                                    "confirmMessage": "Thank You!",
                                    "emailLabel": "Email Address"
                                  },
                                  delay: {
                                    pageViews: 1,
                                    timeDelay: 20
                                  },
                                }
                              ]
                            }
                        }
                      })
                    });
                `,
                  }}>
            </script>)}
        </Head>
        <body>
          {!!GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
            </>)}
          <script>0</script>
          {/* HACK TO REMOVE FOUC WHEN DEPLOYED */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;