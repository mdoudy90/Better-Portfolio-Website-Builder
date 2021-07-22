import { seo } from './data.json';

const { title, description, canonical, twitterHandle } = seo;

export default {
  title,
  description,
  canonical,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.url.ie/',
    site_name: 'SiteName',
    images: [
      { url: 'site/logo192.png' }
    ]
  },
  twitter: {
    handle: twitterHandle,
    site: '@site',
    cardType: 'summary_large_image',
  },
};