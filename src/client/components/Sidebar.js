import { useRouter } from 'next/router';
import Link from 'next/link';

import LinkedinIcon from '../../../assets/icons/linkedin.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import InstagramIcon from '../../../assets/icons/instagram.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import data from '../../../src/client/lib/data.json';

const { sections, social } = data;

const SOCIAL_MAP = {
  'linkedin': <LinkedinIcon />,
  'github': <GithubIcon />,
  'instagram': <InstagramIcon />,
  'twitter': <TwitterIcon />
}

const Sidebar = ({ scrollTo, sectionInView }) => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="sidebar__cta">
        { router.pathname === '/'
            ? <Link href="/doc">
                <button>Resume</button>
              </Link>
            : <Link href="/">
                <button>Home</button>
              </Link>}
      </div>
      <div className="sidebar__nav">
        { router.pathname === '/' && sections.map(({ heading }) => (
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
  )
};

export default Sidebar;
