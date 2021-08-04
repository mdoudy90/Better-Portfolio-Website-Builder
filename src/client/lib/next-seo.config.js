import data from './data.json';

const {
  title,
  description,
  language,
  canonical,
  url,
  twitterHandle,
  mobileIcon
} = data.meta;

export default {
  title,
  description,
  canonical,
  openGraph: {
    type: 'website',
    locale: language,
    url: url,
    site_name: title,
    images: mobileIcon
      ? [{ url: `${url}${mobileIcon}` }]
      : []
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: 'summary_large_image',
  },
};