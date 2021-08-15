import { useState, useRef } from 'react';
import Image from 'next/image';

import FilteredImage from '../components/FilteredImage';
import Portal from '../components/Portal';
import useModalClose from '../hooks/useModalClose';
import useWindowDimensions from '../hooks/useWindowDimensions';
import data from '../../../src/client/lib/data.json';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

const { gallery } = data;
const IMAGES_PER_GROUP_STANDARD = 9;
const IMAGES_PER_GROUP_MOBILE = 6;
const MOBILE_BREAKPOINT = 768;

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
        width='18.75rem'
        height='18.75rem'
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
  const { width } = useWindowDimensions();

  const imagesPerGroup = width <= MOBILE_BREAKPOINT
    ? IMAGES_PER_GROUP_MOBILE
    : IMAGES_PER_GROUP_STANDARD;

  const onPopoverToggle = (nextIndex) => {
    const nextGroupIndex = Math.floor(nextIndex / imagesPerGroup);
    if (nextGroupIndex !== groupIndex) {
      setGroupIndex(nextGroupIndex);
    }
  }

  return (
    <>
      <div className='gallery__images'>
        { gallery.slice(imagesPerGroup * groupIndex, (imagesPerGroup * (groupIndex + 1))).map(({ image, thumbnail }, i) => (
          <FilteredImage
            key={`gallery-image-${i}`}
            className='gallery__image'
            image={thumbnail || image}
            layout='responsive'
            onClick={() => setSelectedIndex(i + (imagesPerGroup * groupIndex))}
          />
        ))}
      </div>
      { gallery.length > imagesPerGroup && (
        <div className='gallery__pagination'>
          { Array(Math.floor(gallery.length / imagesPerGroup) + 1).fill().map((_, i) => (
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
    </>
  )
};

export default Gallery;
