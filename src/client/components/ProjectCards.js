import Image from 'next/image'

import { projectCards } from '../../../src/client/data/data.json';
import WebIcon from '../../../assets/icons/web.svg';
import GithubIcon from '../../../assets/icons/github.svg';

const ICON_MAP = {
  'website': <WebIcon />,
  'github': <GithubIcon />
}

export const ProjectCard = ({
  title,
  description,
  tools,
  links,
  image,
  showInverse
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
      <div className={`project-card__image${showInverse ? '--inverse' : ''}`}>
        <Image
          alt=''
          src={image}
          layout='fill'
          objectFit='cover'
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
}

export const ProjectCards = () => (
  <>
    { projectCards.map((data, i) => (
      <ProjectCard
        key={data.title || i}
        title={data.title}
        description={data.description}
        tools={data.tools}
        links={data.links}
        image={data.image}
        showInverse={!!(i % 2)}
      />
    ))}
  </>
)
