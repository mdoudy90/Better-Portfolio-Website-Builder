import { useState, useRef } from 'react';
import Image from 'next/image'

import Portal from '../components/Portal';
import useModalClose from '../hooks/useModalClose';
import data from '../../../src/client/lib/data.json';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

const { gallery } = data;
const IMAGES_PER_GROUP = 9;

const GalleryPopover = ({ selectedIndex, handleClose, onPopoverToggle }) => {
  const [imageIndex, setImageIndex] = useState(selectedIndex);
  const popoverRef = useRef(null);

  useModalClose(popoverRef, () => {
    handleClose();
  }, [imageIndex], true);

  const toggleIndex = (amt) => {
    const nextIndex = imageIndex + amt;
    if (nextIndex > -1 && nextIndex < gallery.length) {
      setImageIndex(nextIndex);
      onPopoverToggle(nextIndex);
    }
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
  const [groupIndex, setGroupIndex] = useState(0);

  const onPopoverToggle = (nextIndex) => {
    const nextGroupIndex = Math.floor(nextIndex / IMAGES_PER_GROUP);
    if (nextGroupIndex !== groupIndex) {
      setGroupIndex(nextGroupIndex);
    }
  }

  return (
    <div className='gallery'>
      <div className='gallery__images'>
        { gallery.slice(IMAGES_PER_GROUP * groupIndex, (IMAGES_PER_GROUP * (groupIndex + 1))).map(({ image, placeholder }, i) => (
          <div key={`gallery-image-${i}`} className='gallery__image'>
            <Image
              alt=''
              src={image}
              onClick={() => setSelectedIndex(i + (IMAGES_PER_GROUP * groupIndex))}
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
      </div>
      { gallery.length > IMAGES_PER_GROUP && (
        <div className='gallery__pagination'>
          { Array(Math.floor(gallery.length / IMAGES_PER_GROUP) + 1).fill().map((_, i) => (
            <div
              key={i}
              className={`gallery__pagination-bubble ${i === groupIndex ? 'gallery__pagination-bubble--selected' : ''}`}
              onClick={() => setGroupIndex(i)}
            />
          ))}
        </div>
      )}
      { selectedIndex !== -1 &&
        <GalleryPopover
          selectedIndex={selectedIndex}
          handleClose={() => setSelectedIndex(-1)}
          onPopoverToggle={onPopoverToggle}
        /> }
    </div>
  )
};

export default Gallery;
