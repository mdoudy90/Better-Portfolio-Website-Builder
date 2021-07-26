import data from '../../../src/client/lib/data.json';

const { preHeading='', heading = '', subHeading = '', text = '', ctaText='' } = data.header;

const Header = ({ scrollTo }) => {
  return (
    <div className="header">
      <p className="header__preheading">{ preHeading }</p>
      <h1 className="header__heading">{ heading}</h1>
      <h2 className="header__subheading">{ subHeading }</h2>
      <p className="header__text">{ text }</p>
      <div className="header__cta">
        <button scroll-dest="contact" onClick={scrollTo}>{ ctaText }</button>
      </div>
    </div>
  )
}

export default Header;