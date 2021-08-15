import Image from 'next/image';

import FilteredImage from '../components/FilteredImage';
import data from '../../../src/client/lib/data.json';

const { content, contentHtml, image } = data.about;

const About = () => (
  <div className='about'>
    <div className='about__content'>
      {content && !contentHtml && content.map((text, i) => (
        <p key={`about-part-${i}`}>{text}</p>
      ))}
      {contentHtml && contentHtml.map((text, i) => (
        <p key={`about-part-${i}`} dangerouslySetInnerHTML={{__html:text}} />
      ))}
    </div>
    {image && (
      <FilteredImage
        className='about__image'
        image={image}
        priority={true}
      />
    )}
  </div>
);

export default About;
