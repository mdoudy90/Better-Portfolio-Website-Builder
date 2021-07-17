import Image from 'next/image'

import { about } from '../../../src/client/data/data.json';

const { content, image } = about;

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        { content.map((text) => (
          <p>{ text }</p>
        ))}
      </div>
      <div className="about__image">
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
  )
}

export default About;