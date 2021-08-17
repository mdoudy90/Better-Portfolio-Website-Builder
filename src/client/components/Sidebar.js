import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import MenuIcon from '../../../assets/icons/menu.svg';
import LinkedinIcon from '../../../assets/icons/linkedin.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import InstagramIcon from '../../../assets/icons/instagram.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import Portal from './Portal';
import useWindowDimensions from '../../../src/client/hooks/useWindowDimensions';
import * as gtag from '../lib/gtag';
import data from '../../../src/client/lib/data.json';

const { sections, social, document, settings } = data;
const MOBILE_BREAKPOINT = 768;
const SOCIAL_MAP = {
  'linkedin': <LinkedinIcon />,
  'github': <GithubIcon />,
  'instagram': <InstagramIcon />,
  'twitter': <TwitterIcon />
}

export const DefaultSidebar = ({ scrollTo, sectionInView, isMobile, onClickStart }) => {
  const router = useRouter();
  const sideBarLocation = settings.sideBarLocation || 'right';

  const captureEvent = (e) => {
    if (!gtag.GA_TRACKING_ID) return;

    const params = { details: e.target.id };
    gtag.event({ action: 'click', params });
  }

  return (
    <div className={`sidebar sidebar--${sideBarLocation}`}>
      <div className='sidebar__cta'>
        {router.pathname === '/'
        ? isMobile
            ? <a href={document.path} rel='noreferrer' target='_blank'>
                <button id='view-resume' onClick={captureEvent}>Resume</button>
              </a>
            : <Link href='/doc'>
                <button id='navigate-to-resume' onClick={captureEvent}>Resume</button>
              </Link>
        : <a download={document.fileName} href={document.path}>
            <button id='download-resume' onClick={captureEvent}>Download</button>
          </a>
        }
      </div>
      <div className='sidebar__nav'>
        {router.pathname === '/' ? (
          sections.map(({ heading }) => (
            <h2
              key={heading}
              className={sectionInView === heading.toLowerCase() ? 'sidebar__nav--highlight' : ''}
              scroll-dest={heading}
              onClick={(e) => {
                if (onClickStart) onClickStart();
                scrollTo(e);
              }}>
              {heading}
            </h2>
          ))
        ) : (
          <Link href='/'>
            <h2>Home</h2>
          </Link>
        )}
      </div>
      {!isMobile && (
        <div className='sidebar__social'>
          {Object.entries(social).map(([type, link]) => {
            if (!link.length) return null;
            if (!/^https?:\/\//.test(link)) link = `https://${link}`;
            return (
              <a key={type} href={link} aria-label={`My ${type}`} rel='noreferrer' target='_blank'>
                {SOCIAL_MAP[type]}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const MobileSidebar = ({ scrollTo, sectionInView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarLocation = settings.sideBarLocation || 'right';

  return (
    <div className={`mobile-sidebar mobile-sidebar--${sideBarLocation}`}>
      <MenuIcon className="mobile-sidebar__menu-toggle-button" onClick={() => setIsOpen(true)} />
      <div className="mobile-sidebar__social">
        {Object.entries(social).map(([type, link]) => {
          if (!link.length) return null;
          if (!/^https?:\/\//.test(link)) link = `https://${link}`;
          return (
            <a key={type} href={link} aria-label={`My ${type}`} rel='noreferrer' target='_blank'>
              {SOCIAL_MAP[type]}
            </a>
          );
        })}
      </div>
      { isOpen && (
        <Portal>
          <DefaultSidebar
            scrollTo={scrollTo}
            sectionInView={sectionInView}
            isMobile={true}
            onClickStart={() => setIsOpen(false)}
          />
        </Portal>
      )}
    </div>
  )
};

const Sidebar = ({ scrollTo, sectionInView }) => {
  const { width } = useWindowDimensions();

  return !!width && (
    width > MOBILE_BREAKPOINT
    ? <DefaultSidebar scrollTo={scrollTo} sectionInView={sectionInView} />
    : <MobileSidebar scrollTo={scrollTo} sectionInView={sectionInView} />
  );
};

export default Sidebar;
