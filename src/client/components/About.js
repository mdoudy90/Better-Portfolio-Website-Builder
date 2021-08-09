import Image from 'next/image';

import FilteredImage from '../components/FilteredImage';
import data from '../../../src/client/lib/data.json';

const { content, image, placeholder } = data.about;

const About = () => (
  <div className='about'>
    <div className='about__content'>
      {content.map((text, i) => (
        <p key={`about-part-${i}`}>{text}</p>
      ))}
    </div>
    {image && (
      <FilteredImage
        className='about__image'
        image={image}
        priority={true}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default About;
