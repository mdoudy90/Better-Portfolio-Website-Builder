import { useState } from 'react';
import Image from 'next/image'

import Portal from '../components/Portal';
import useModalClose from '../hooks/useModalClose';
import { gallery } from '../../../src/client/lib/data.json';

const GalleryPopover = ({ image }) => (
  <Portal>
    <div className='gallery__popover'>
      <Image
        alt=''
        src={image}
        layout='responsive'
        width='300px'
        height='300px'
        objectFit='contain'
        quality={100}
        priority={false}
      />
    </div>
  </Portal>
);

const Gallery = () => {
  const [imageInView, setImageInView] = useState(null);
  // const popoverRef = useRef(null);
  //! figure out how to pass down ref for closing modal
  useModalClose({ current: null }, () => {
    if (imageInView) setImageInView(null);
  }, [imageInView]);

  return (
    <div className='gallery'>
      {gallery.map((image) => (
        <div className='gallery__image'>
          <Image
            alt=''
            src={image}
            onClick={() => setImageInView(image)}
            layout='responsive'
            width='300px'
            height='300px'
            objectFit='cover'
            quality={100}
            priority={false}
          />
        </div>
      ))}
      { imageInView && <GalleryPopover image={imageInView} /> }
    </div>
  )
};

export default Gallery;