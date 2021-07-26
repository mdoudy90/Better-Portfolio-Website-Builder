import Image from 'next/image'

import data from '../../../src/client/lib/data.json';

const { content, image, placeholder } = data.about;

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        { content.map((text, i) => (
          <p key={`about-part-${i}`}>{ text }</p>
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
          placeholder={placeholder ? 'blur' : 'empty'}
          blurDataURL={placeholder || null}
        />
      </div>
    </div>
  )
}

export default About;