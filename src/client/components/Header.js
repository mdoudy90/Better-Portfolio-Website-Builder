import data from '../../../src/client/lib/data.json';

const { preHeading, heading, subHeading, text, ctaText } = data.header;

const Header = ({ scrollTo }) => (
  <div className='header'>
    {preHeading && <p className='header__preheading'>{preHeading}</p>}
    {heading && <h1 className='header__heading'>{heading}</h1>}
    {subHeading && <h2 className='header__subheading'>{subHeading}</h2>}
    {text && <p className='header__text'>{text}</p>}
    {ctaText && (
      <div className='header__cta'>
        <button scroll-dest='contact' onClick={scrollTo}>
          {ctaText}
        </button>
      </div>
    )}
  </div>
);

export default Header;
