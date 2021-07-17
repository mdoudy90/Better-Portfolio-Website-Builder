import Image from 'next/image'

import { gallery } from '../../../src/client/data/data.json';

const Gallery = () => (
  <div className='gallery'>
    {gallery.map((image) => (
      <div className='gallery__image'>
        <Image
          alt=''
          src={image}
          layout='responsive'
          width='300px'
          height='300px'
          objectFit='cover'
          quality={100}
          priority={false}
        />
      </div>
    ))}
  </div>
);

export default Gallery;