import Image from 'next/image'

const Gallery = ({ images }) => (
  <div className='gallery'>
    {images.map((image) => (
      <div className='gallery__image'>
        <Image
          alt=''
          src={image}
          layout='fill'
          objectFit='cover'
          quality={100}
          priority={false}
        />
      </div>
    ))}
  </div>
);

export default Gallery;