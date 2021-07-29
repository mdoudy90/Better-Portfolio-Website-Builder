import { useState, useRef } from 'react';
import Image from 'next/image'

import Portal from '../components/Portal';
import useModalClose from '../hooks/useModalClose';
import data from '../../../src/client/lib/data.json';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

const { gallery } = data;

const GalleryPopover = ({ selectedIndex, handleClose }) => {
  const [imageIndex, setImageIndex] = useState(selectedIndex);
  const popoverRef = useRef(null);

  useModalClose(popoverRef, () => {
    handleClose();
  }, [imageIndex]);

  const toggleIndex = (amt) => {
    const nextIndex = imageIndex + amt;
    if (nextIndex > -1 && nextIndex < gallery.length) {
      setImageIndex(nextIndex)
    }
    //? SET LEFT / RIGHT KEY EVENT LISTENERS?
  }

  return (
  <Portal>
    <div className='gallery__popover' ref={popoverRef}>
      <ArrowLeft
        className={`gallery__arrow ${imageIndex - 1 === -1 ? 'gallery__arrow--disabled' : ''}`}
        onClick={() => { toggleIndex(-1) }}
      />
      <Image
        alt=''
        src={gallery[imageIndex].image}
        layout='responsive'
        width='300px'
        height='300px'
        objectFit='contain'
        quality={100}
        priority={false}
      />
      <ArrowRight
        className={`gallery__arrow gallery__arrow--right ${imageIndex + 1 === gallery.length ? 'gallery__arrow--disabled' : ''}`}
        onClick={() => { toggleIndex(1) }}
      />
    </div>
  </Portal>
)};

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className='gallery'>
      {gallery.map(({ image, placeholder }, i) => (
        <div key={`gallery-image-${i}`} className='gallery__image'>
          <Image
            alt=''
            src={image}
            onClick={() => setSelectedIndex(i)}
            layout='responsive'
            width='300px'
            height='300px'
            objectFit='cover'
            quality={100}
            priority={false}
            placeholder={placeholder ? 'blur' : 'empty'}
            blurDataURL={placeholder || null}
          />
        </div>
      ))}
      { selectedIndex !== -1 &&
        <GalleryPopover
          selectedIndex={selectedIndex}
          handleClose={() => setSelectedIndex(-1)}
        /> }
    </div>
  )
};

export default Gallery;
