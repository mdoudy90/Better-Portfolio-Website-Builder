import { sections, social } from '../../../src/client/data/data.json';
import LinkedinIcon from '../../../assets/icons/linkedin.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import InstagramIcon from '../../../assets/icons/instagram.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';

const SOCIAL_MAP = {
  'linkedin': <LinkedinIcon />,
  'github': <GithubIcon />,
  'instagram': <InstagramIcon />,
  'twitter': <TwitterIcon />
}

const Sidebar = ({ scrollTo, sectionInView }) => (
  <div className="sidebar">
    <div className="sidebar__cta">
      <button>Resume</button>
    </div>
    <div className="sidebar__nav">
      { sections.map(({ heading }) => (
        <h2
          key={heading}
          className={sectionInView === heading.toLowerCase() ? 'sidebar__nav--highlight' : ''}
          scroll-dest={heading}
          onClick={scrollTo}
        >
          { heading }
        </h2>
      ))}
    </div>
    <div className="sidebar__social">
      {Object.entries(social).map(([type, link]) => {
        if (!link.length) return null;
        if (!/^https?:\/\//.test(link)) link = `https://${link}`;
        return (
          <a key={type} href={link} rel='noreferrer' target='_blank'>
            {SOCIAL_MAP[type]}
          </a>
        );
      })}
    </div>
  </div>
);

export default Sidebar;
