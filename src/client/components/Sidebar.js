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

const Sidebar = ({ navHeadings, social, scrollTo, sectionInView }) => (
  <div className="sidebar">
    { console.log(sectionInView) }
    <div className="sidebar__cta">
      <button>Resume</button>
    </div>
    <div className="sidebar__nav">
      { navHeadings.map((heading) => (
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
      { social.map((platform) => (
        SOCIAL_MAP[platform]
      ))}
    </div>
  </div>
);

export default Sidebar;
