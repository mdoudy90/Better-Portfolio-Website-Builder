import React, { useState, useRef } from 'react';
import Image from 'next/image';

import Portal from '../components/Portal';
import useModalClose from '../hooks/useModalClose';
import WebIcon from '../../../assets/icons/web.svg';
import CloseIcon from '../../../assets/icons/close.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import data from '../../../src/client/lib/data.json';

const { projectCards } = data;

const ICON_MAP = {
  'website': <WebIcon />,
  'github': <GithubIcon />
}

const ProjectPopover = ({ handleClose, data }) => {
  const [indexInView, setIndexInView] = useState(0);
  const popoverRef = useRef(null);

  useModalClose(popoverRef, () => {
    handleClose();
  }, []);

  return (
    <Portal>
      <div className="project-popover" ref={popoverRef}>
        <CloseIcon className="project-popover__close-icon" onClick={handleClose} />
        <div className="project-popover__overview">
          <h3 className="project-popover__heading">{data.title}</h3>
          <p className="project-popover__description">{data.description}</p>
        </div>
        <div className="project-popover__highlights">
          { data.highlights.map(({ heading, details, media }, i) => (
            <div className={`project-popover__highlight ${indexInView === i ? 'project-popover__highlight--selected' : ''}`} key={i}>
              <h4 className="project-popover__title" onClick={() => setIndexInView(i)}>
                {heading}
              </h4>
              { indexInView === i && (
                <div className="project-popover__highlight-details">
                  { details.map((point, i) => (
                    <p className={`project-popover__highlight-text ${!media ? 'project-popover__highlight-text--long' : ''}`} key={i}>{point}</p>
                  ))}
                  { media &&
                    <div className="project-popover__highlight-media">
                      <Image
                        alt=''
                        src={media}
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        priority={true}
                      />
                    </div>
                  }
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Portal>
  )
}

export const ProjectCard = ({
  handleClick,
  title,
  description,
  tools,
  links,
  image,
  placeholder,
  showInverse,
  clickable
}) => {
  return (
    <div className='project-card'>
      <div className={`project-card__details${showInverse ? '--inverse' : ''}`}>
        <h3 className='project-card__title'>{title}</h3>
        <p className='project-card__description'>{description}</p>
        <div className='project-card__tools'>
          {tools.map((tool) => (
            <p key={tool}>{tool}</p>
          ))}
        </div>
        <div className='project-card__links'>
          {Object.entries(links).map(([type, link]) => {
            if (!link.length) return null;
            if (!/^https?:\/\//.test(link)) link = `https://${link}`;
            return (
              <a key={type} href={link} rel='noreferrer' target='_blank'>
                {ICON_MAP[type]}
              </a>
            );
          })}
        </div>
      </div>
      <div
        className={`project-card__image${showInverse ? '--inverse' : ''} ${clickable ? 'project-card__image--clickable' : ''}`}
        onClick={clickable ? handleClick : null}
      >
        <Image
          alt=''
          src={image}
          layout='fill'
          objectFit='cover'
          quality={100}
          priority={true}
          placeholder={placeholder ? 'blur' : 'empty'}
          blurDataURL={placeholder || null}
        />
      </div>
    </div>
  );
}

export const ProjectCards = ({ showInverse = true }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [amountShown, setAmountShown] = useState(3);

  return (
    <>
      { projectCards.slice(0, amountShown).map((data, i) => (
        <ProjectCard
          key={data.title || i}
          handleClick={() => setSelectedIndex(i)}
          title={data.title}
          description={data.description}
          tools={data.tools}
          links={data.links}
          image={data.image}
          placeholder={data.placeholder}
          showInverse={showInverse && !!(i % 2)}
          clickable={!!data.highlights}
        />
      ))}
      { selectedIndex !== -1 &&
        <ProjectPopover
          handleClose={() => setSelectedIndex(-1)}
          data={projectCards[selectedIndex]}
        />
      }
      { amountShown < projectCards.length &&
        <div className="project-cards__toggle-amount">
          <button onClick={() => setAmountShown(amountShown + 3)}>Show More</button>
        </div>
      }
    </>
  )
}
