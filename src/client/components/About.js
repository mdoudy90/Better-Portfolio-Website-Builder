import Image from 'next/image'

const About = ({ content, image }) => {
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